import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function HeadSEO({
  children,
  title,
  description,
  canonical,
  image
}) {

  const defaultImage = {
    url: 'purple-project.vercel.app',
    width: 800,
    height: 600,
    alt: 'Purple Creation',
    type: 'image/png'
  };
  const router = useRouter();

  const url = `https://purple-project.vercel.app/${router.route}`;

  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          images: [
            image
              ? {
                  url: image.url,
                  width: 800,
                  height: 600,
                  alt: image.alt,
                  type: `image/${image.type}`
                }
              : defaultImage
          ]
        }}
        canonical={canonical ? canonical : url}
      />
      {children}
    </div>
  );
}
