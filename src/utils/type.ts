export type ApiType = {
  createdAt: string;
  avatar: string;
  Bio: string;
  jobTitle: string;
  profile: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  id: string;
  username?: string;
  email?: string;
};
