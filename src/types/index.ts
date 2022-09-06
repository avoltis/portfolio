interface education {
  university: string;
  degree: string;
  startYear: string;
  endYear: string;
  timeLine: string;
  present: boolean;
  fieldOfStudy: string;
  address: string;
}
interface experience {
  company: string;
  title: string;
  startDate: string;
  endDate?: string;
  timeLine?: string;
  present: boolean;
  description: string;
  skills: string[];
  address: string;
  image?: string;
}
interface social {
  email?: string;
  github?: string;
  linkedIn?: string;
}

interface certifications {
  name: string;
  issuingOrganization?: string;
  issueDate?: string;
  expirationDate?: string;
  credentialID?: string;
  credentialUrl?: string;
}
export interface portfolio {
  firstName: string;
  lastName: string;
  title: string;
  address: string;
  summary: string;
  social: social;
  resume: string;
  experience: experience[];
  education: education[];
  certifications: certifications[];
  skills: string[];
  topSkills: string[];
  languages: string[];
  hobbies: string;
}
