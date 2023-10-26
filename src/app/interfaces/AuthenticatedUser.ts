import Profile from './Profile';

export default interface AuthenticatedUser {
  id: string;
  email: string;
  profile: Profile;
}
