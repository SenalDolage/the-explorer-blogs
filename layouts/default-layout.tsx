import { ReactNode } from "react"
import { Header, Footer } from "../components"

type Props = {
    children: ReactNode;
    pageTitle: string;
}

export default function DefaultLayout({ children, pageTitle }: Props) {
    return (
        <div className="default-layout">
            <Header title={pageTitle} />
            {children}
            <Footer />
        </div>
    )
}
