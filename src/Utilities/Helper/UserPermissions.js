import { getStorage } from "../storage";
const userInfo = getStorage("userInfo");

export const userPermissions =
  userInfo && userInfo.user_info && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_permission
    ? JSON.parse(userInfo.user_info.user_permissions.role_permission).map((index) => ({
        module_name: index.module_name,
        permission: index.permission,
      }))
    : [];
