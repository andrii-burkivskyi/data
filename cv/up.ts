interface UserProfile {
  avatar: string;
  name: string;
  surname: string;
  position: string;
  email: string;
  webSite: Url;
  location: Url;
  linkedin: Url;
  twitter: Url;
  facebook: Url;
  personalSkills: Skill[];
  professionalSkills: Skill[];
  proficiency: Skill[];
  jobs: Position[];
  education: Position[];
}

interface Position {
  position: string;
  time: string;
  organization: string;
  description: string;
}

interface Skill {
  value: string;
  text: string;
}

interface Url {
  text: string;
  url: string;
}