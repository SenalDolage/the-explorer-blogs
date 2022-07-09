import type { NextPage } from 'next'
import DefaultLayout from "../layouts/default-layout";

const About: NextPage = () => {
    return (
        <div className="home">
            <DefaultLayout pageTitle="About">
                <div className="bg-yellow py-20 lg:py-6 min-h-[250px] flex items-center w-full">
                    <div className="container">
                        <div className="mb-6 text-4xl leading-10 font-semibold text-center">
                            About
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </div>
    )
}

export default About
