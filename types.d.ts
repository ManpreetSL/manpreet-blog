export type Author = {
  id: string;
  bio: string;
  name: string;
  photo: {
    url: string;
  };
};

export type Post = {
  title: string;
  excerpt: string;
  authors: Author[];
  featuredImage: {
    url: string;
  };
  createdAt: Date;
  slug: string;
  categories: {
    name: string;
    slug: string;
  };
};
