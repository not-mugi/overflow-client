export interface Question {
  id: string;
  title: string;
  body: string;
  votes: number;
  views: number;
  answers: number;
  tags: string[];
  author: User;
  history: QuestionHistory;
  createdAt: string;
}

export interface HomeQuestion {
  id: string;
  title: string;
  votes: number;
  views: number;
  answers: number;
  tags: string[];
  history: QuestionHistory;
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

export interface QuestionHistory {
  user: string;
  status: string;
  date: string;
  time: string;
}

export interface Contributor {
  username : string;
  totalRepsEarned : string
}