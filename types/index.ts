export interface TOrganizer {
  name: string;
  username: string;
  email: string;
  orgType: string;
  password: string;
  oldPassword: string;
  moreOldPassword: string;
  contactNumber: string;
  about: string;
  officeAddress: string;
  serviceArea: string;
  isVerified: boolean;
  website: string;
  socialMediaLinks: string[];
  contactPerson: {
    name: string;
    phoneNumber: string;
    roleInOrg: string;
  };
  orgLogo: string;
}
