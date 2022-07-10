import { Post } from "../models/post";
import { urlFor } from "../sanity";

type Props = {
    post: Post;
}

export default function BlogCard({ post }: Props) {
    return (
        <div className="blog-card">
            <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg group">
                <img className="w-full h-44 lg:h-52 object-cover object-center group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()} alt="blog-card" />

                <div className="px-3 py-3">
                    <div className="flex items-center justify-between">
                        <div className="font-bold text-xl mr-2">
                            {post.title}
                        </div>
                        <div>
                            <img src={urlFor(post.author.image).url()} alt="author" className="h-10 w-10 rounded-full" />
                        </div>
                    </div>

                    <div className="pt-2">
                        <span className="italic text-sm">Categories: </span>
                        {post.categories.map(cat => (
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                #{cat.title}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
