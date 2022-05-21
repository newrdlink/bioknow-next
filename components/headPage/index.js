import Head from "next/head"

const HeadPage = ({ title, linkFavicon = "/favicon.ico", description, keywords }) => {

  return (
    <Head>
      <link rel="icon" href={linkFavicon} type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>{title}</title>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <meta name="author" content="Роман Ньюэр"></meta>
    </Head>
  )
}

export default HeadPage