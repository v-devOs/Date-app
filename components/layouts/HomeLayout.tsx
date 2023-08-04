import { FC } from "react"
import Head from "next/head"
import { Navbar } from "../ui"


interface Props{
  title:     string
  desc:      string
  children:  React.ReactNode
}

export const HomeLayout: FC<Props> = ({ title, desc, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={desc}/>

        <meta name = 'og:title' content ={ title } />
        <meta name = 'og:description' content={ desc }/>

      </Head>

      <nav>
        <Navbar/>
      </nav>

      <main style={{ marginTop: '70px'}} className="fade-in-animation">
        { children }
      </main>
    </>
  )
}
