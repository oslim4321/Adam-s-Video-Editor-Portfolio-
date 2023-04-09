import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
// import image from '@/images/Logo with text.png'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const url = `https://purple-project.vercel.app/${router.route}`;
  const description = "Contact me for your Video Editing Jobs";
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </Head>
      <DefaultSeo
        title="Purple Creation"
        titleTemplate="%s | TypedByAI"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url,
          description: description,
          site_name: "Purple Creation | Komoniwa",
          images: [
            {
              url: "https://purple-project.vercel.app/images/Logo%20with%20text.png",
              width: 800,
              height: 600,
              alt: "Purple Creation",
              type: "image/png",
            },
          ],
        }}
        canonical={url}
        twitter={{
          handle: "@Komoniwa",
          site: "@PurpleCreation",
          cardType: "summary_large_image",
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
      ></script>{" "}
    </>
  );
}
