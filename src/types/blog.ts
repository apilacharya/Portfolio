export interface Author {
  name: string;
  avatar: string;
  bio?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  author: Author;
  readingTime?: string;
  content?: string;
}

export interface BlogSearchParams {
  page?: string;
  category?: string;
  sort?: "date" | "title";
  search?: string;
}
