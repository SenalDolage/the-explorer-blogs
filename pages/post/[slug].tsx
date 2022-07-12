import DefaultLayout from "../../layouts/default-layout";
import { sanityClient, urlFor } from '../../sanity';
import { Post } from '../../models/post';
import { GetStaticProps } from "next";
import Image from 'next/image'

type Props = {
    post: Post;
}

export default function PostDetail({ post }: Props) {
    return (
        <div className="post">
            <DefaultLayout pageTitle="Home">
                <div className="container">
                    <article>
                        <img src={urlFor(post.mainImage).url()} className="w-full h-60 lg:h-72 object-cover object-center" alt="post" />
                        <div className="article-header my-8">
                            <h1 className="mb-4 text-2xl lg:text-3xl">{post.title}</h1>

                            <div className="flex items-center">
                                <Image width={50} height={50} className="rounded-full" src={urlFor(post.author.image).url()} alt="author" />
                                <div className="ml-2">
                                    <p className="text-sm mb-1">
                                        Written By <span className="font-semibold">{post.author.name}</span>
                                    </p>
                                    <p className="text-sm">
                                        Published on {new Date(post.publishedAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="article-body">

                        </div>
                    </article>
                </div>
            </DefaultLayout>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "post"] {
        _id,
        "slug": slug.current,
    }`;

    const posts: Post[] = await sanityClient.fetch(query);
    const paths = posts.map(post => ({
        params: {
            slug: post.slug
        }
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
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

    const post = await sanityClient.fetch(query, {
        slug: params?.slug
    });

    if (!post) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            post
        },
        revalidate: 60,
    };
};