import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import "bootstrap/dist/css/bootstrap.min.css";

// import image from '@/images/Logo with text.png'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const url = `https://purple-project.vercel.app/${router.route}`;
  const description = "Contact me for your Video Editing Jobs";
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"
        ></link>
      </Head>
      <DefaultSeo
        title="Purple Creation"
        // titleTemplate="%Purple Creation | Komoniwa"
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
      {/* <script
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
      ></script>{" "} */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"
      ></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
    </>
  );
}
