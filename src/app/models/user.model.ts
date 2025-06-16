export interface UserModel {
  id: string;
  email: string;
  createdAt: Date;
  username: string;
  enabled: boolean;
  avatar: string;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
}