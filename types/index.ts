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

export const OrganizationType = [
  "Non-Profit Organization",
  "Youth Organization",
  "Non-Governmental Organization (NGO)",
  "Governmental Organization",
  "Skill Development Institution",
  "Social Club or Society",
  "University Club or Society",
  "EduTech Company",
  "Educational Institution",
];

export interface INavItems {
  to: string;
  matchUrl: string;
  name: string;
  icon: any;
}

export interface TNavItems {
  label: string;
  path: string;
  Icon: React.ComponentType<any>;
}

export enum UserRole {
  User = "user",
  Organizer = "organizer",
  SuperAdmin = "superAdmin",
}
