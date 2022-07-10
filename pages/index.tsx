import DefaultLayout from "../layouts/default-layout";
import { BlogCard } from "../components";
import { sanityClient } from '../sanity';
import { Post } from '../models/post';
import Link from 'next/link';

type Props = {
  posts: Post[];
}

export default function Home({ posts }: Props) {
  console.log(posts);

  return (
    <div className="home">
      <DefaultLayout pageTitle="Home">

        {/* Hero Banner */}
        <div className="hero-banner bg-yellow py-20 lg:py-6 min-h-[250px] lg:min-h-[400px] flex items-center w-full">
          <div className="hero-banner-inner container grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div>
              <h1 className="mb-6 text-4xl leading-10 font-semibold">
                This is a great place to <br /> read and write.
              </h1>
              <div className="text-lg">
                This is a sample blog made using NextJS and Sanity.io
              </div>
            </div>
            <div></div>
          </div>
        </div>

        {/* Blog Posts list */}
        <div className="blog-card-list my-10 lg:my-14">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
            {posts.map(post => (
              <Link key={post._id} href={post.slug}>
                <a>
                  <BlogCard post={post} />
                </a>
              </Link>
            ))}
          </div>
        </div>

      </DefaultLayout>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    "slug": slug.current,
    body,
    mainImage,
    publishedAt,
    categories[] -> {
      title,
      slug
    },
    author -> {
      name,
      image
    }
  }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    }
  }
}