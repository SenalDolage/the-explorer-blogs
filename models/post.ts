export type Post = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: Date;
  body: [object];
  author: {
    name: string;
    image: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  categories: {
    title: string;
    slug: string;
  }[];
};
