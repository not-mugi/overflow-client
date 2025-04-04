export type Question = {
  id: string;
  title: string;
  body: string;
  votes: number;
  views: number;
  answers: number;
  tags: string[];
  author: User;
  hasAcceptedAnswer: boolean;
  history: QuestionHistory;
}

export type HomeQuestion = {
  id: string;
  title: string;
  votes: number;
  views: number;
  answers: number;
  tags: string[];
  history: QuestionHistory;
}

export type User = {
  id: number;
  name: string;
  avatar: string;
  reputation: number;
}

export type Answer = {
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

export type Topic = {
  id: string;
  name: string;
}

export type QuestionHistory = {
  user: string;
  status: string;
  date: string;
  time: string;
}

export type Contributor = {
  username : string;
  totalRepsEarned : string
}

export type PopularContent = {
  title : string,
  id : string,
  content : Content
} 

export type Content = "article" | "question"

export type PopularTag = {
  title : string;
  id : string
}