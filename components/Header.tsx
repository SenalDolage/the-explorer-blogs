import Head from 'next/head'

type Props = {
    title: string;
}

export default function Header({ title }: Props) {
    return (
        <header>
            <Head>
                <title> {title} | The Explorer Blogs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="header-inner">
                header
            </div>
        </header>
    )
}
