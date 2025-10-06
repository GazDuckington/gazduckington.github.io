export interface Biodata {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    address: string;
    title: string;
    github?: string;
    languages?: string[];
    programming_languages?: string[];
    tools?: string[];
    email?: string;
    phone?: string;
    occupation?: string;
    nationality?: string;
    hobbies?: string[];
    bio?: string;
}
export declare const biodata: Biodata;
