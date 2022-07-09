import type { NextPage } from 'next'
import Image from 'next/image'
import DefaultLayout from "../layouts/default-layout";

const Home: NextPage = () => {
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

      </DefaultLayout>
    </div>
  )
}

export default Home
