import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { CaslAbilityFactory, AppAbility } from "./casl-ability.factory";
import { RequiredPermission, PERMISSION_CHECKER_KEY } from "./permissions.decorator";

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector, private abilityFactory: CaslAbilityFactory) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions =
      this.reflector.get<RequiredPermission[]>(PERMISSION_CHECKER_KEY, context.getHandler()) || [];
    const req = context.switchToHttp().getRequest();
    const user = req.user;
    const ability = await this.abilityFactory.createForUser(user);
    return requiredPermissions.every(permission => this.isAllowed(ability, permission));
  }
  private isAllowed(ability: AppAbility, permission: RequiredPermission): boolean {
    const respone = ability.can(...permission);
    if (!respone) 
        throw new UnauthorizedException('You are not authorized to perform this action. Please contact your administrator if you believe this is an error. Thank you.');
    else
        return respone
    
  }
}