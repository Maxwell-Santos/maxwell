import Head from "next/head";

export default function head({children}: any) {

  return (
   <Head>
    <title>{children}</title>
   </Head>
 )
}
