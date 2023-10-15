
import { PureAbility  } from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { UsersService } from "src/modules/users/users.service";
import { User } from "src/modules/users/user.entity";

export enum PermissionAction {
  Manage = "manage",
  CREATE = "create",
  READ = "read",
  UPDATE = "update",
  DELETE = "delete",
}
export type PermissionObjectType = any;
export type AppAbility = PureAbility<[PermissionAction, PermissionObjectType]>;
interface CaslPermission {
  action: PermissionAction;
  // In our database, Invoice, Project... are called "object"
  // but in CASL they are called "subject"
  subject: string;
}
@Injectable()
export class CaslAbilityFactory {
  /*
    This is where i recieve the user persmissions from the database.
    Then i transform them into CASL permissions.
  
  */ 
  constructor(private userService: UsersService) {}

  /* This methods receives the user and transforms it into CASL permissions*/
  async createForUser(user: User): Promise<AppAbility> {
    const dbPermissions  = await this.userService.findAllPermissionsOfUser(user.id);
    const caslPermissions: CaslPermission[] = dbPermissions.map(p => ({
      action: p.action as PermissionAction,
      subject: p.objects.name,
    }));
    return new PureAbility<[PermissionAction, PermissionObjectType]>(caslPermissions);
  }
}
