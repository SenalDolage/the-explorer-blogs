import type { NextPage } from 'next'
import Image from 'next/image'
import DefaultLayout from "../layouts/default-layout";

const Home: NextPage = () => {
  return (
    <div className="home">
      <DefaultLayout pageTitle="Home">
        home page
      </DefaultLayout>
    </div>
  )
}

export default Home
