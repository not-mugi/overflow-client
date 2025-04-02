export interface Question {
  id: number;
  title: string;
  body: string;
  votes: number;
  answers: number;
  views: number;
  tags: string[];
  author: User;
  createdAt: string;
}

export interface User {
  id: number;
  name: string;
  avatar: string;
  reputation: number;
}

export interface Answer {
  id: number;
  body: string;
  votes: number;
  author: User;
  createdAt: string;
  accepted: boolean;
}

export interface Preferences {
  topics : Topic[]
}

export interface Topic {
  id: string;
  name: string;
}

export interface ModifiedHistory {
  user: string;
  status: string;
  date: string;
  time: string;
}

export interface Contributor {
  username : string;
  totalRepsEarned : string
}