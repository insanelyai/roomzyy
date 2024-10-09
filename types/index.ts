import { Dispatch, SetStateAction } from "react";

export interface IUser {
    username: string;
    email: string;
    password: string;
    dob: Date;
    collegeDetails?: {
      name?: string;
      degree?: string;
      graduationYear?: number;
    };
    professionalDetails?: {
      companyName?: string;
      position?: string;
      yearsOfExperience?: number;
    };
    bio: string;
    about: string;
    interests: string[];
    gender: "Male" | "Female";
    activities: string[];
    socialMedia: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
      linkedin?: string;
      [key: string]: string | undefined;
    };
    role: "user" | "admin";
  }
  
