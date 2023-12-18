import { createClient } from "contentful";

if (!import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Contentful access token is not defined in environment variables."
  );
}

const contentfulClient = createClient({
  space: "1v983nokqj8p",
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export default contentfulClient;
