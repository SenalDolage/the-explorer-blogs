import Head from 'next/head'
import Link from 'next/link'

type Props = {
    title: string;
}

export default function Header({ title }: Props) {
    return (
        <header className="header sticky top-0 left-0 w-full bg-white py-6 overflow-hidden shadow-lg">
            <Head>
                <title> {title} | The Explorer Blogs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="header-inner container grid grid-cols-2 lg:grid-cols-3 gap-4 items-center">
                <div className="logo-text-wrap">
                    <div className="font-bold italic text-base lg:text-2xl">
                        <Link href="/">
                            The Explorer Blogs
                        </Link>
                    </div>
                </div>

                <div className="nav-links-wrap hidden lg:block">
                    <ul className="nav-links flex items-center justify-center">
                        <li className="nav-link mr-3">
                            <Link href="/get-started">Get Started</Link>
                        </li>
                        <li className="nav-link mr-3">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="nav-link">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="mobile-menu-wrap lg:hidden">
                    <div className="menu-open-btn text-right">Menu</div>
                </div>
            </div>
        </header>
    )
}
