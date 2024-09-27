export interface TOrganizer {
  _id: string;
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
    imageUrl: string;
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

export interface IEvent {
  _id: string;
  organizer: TOrganizer;
  title: string;
  category: string;
  eventType: string;
  location: string;
  eventStartDate: string;
  eventEndDate: string;
  registrationDeadline: string;
  description: string;
  registrationFee: number;
  eventBanner: string;
  formId: string;

  isPublished: boolean;
  isPublic: boolean;
  isLimitOneResponse: boolean;
  formLink: string;
  submissionMessage: string;
}

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
  Admin = "admin",
  Organizer = "organizer",
  SuperAdmin = "superAdmin",
}

export interface TUser {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
}
