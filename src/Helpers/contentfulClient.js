import { createClient } from "contentful";

const contentfulClient = createClient({
  space: "1v983nokqj8p",
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export default contentfulClient;
