import Head from "next/head"
import React from 'react'

type Props = {
    title: string,
    content: string,
    children: (JSX.Element | null),
}

const Layout: React.FC<Props> = ({ title, content, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={content} />
            </Head>
            <main className=" h-screen bg-dark ">
                {children}
            </main>


        </>
    )
}

export default Layout