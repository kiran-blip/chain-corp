import Head from "next/head";

export default function SEO({
  title = "ChainCorp",
  description = "Open and transparent solutions for the decentralized world",
  imageUrl = "",
}) {
  const windowURL =
    typeof window !== "undefined" && window.location.href
      ? window.location.href
      : "";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={windowURL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ChainCorp" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="chain-corp.com" />
      <meta property="twitter:url" content={windowURL} />
      <meta name="twitter:title" content="ChainCorp" />
      <meta name="twitter:site" content="@ChainCorp" />
      <meta name="twitter:creator" content="@ChainCorp" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
