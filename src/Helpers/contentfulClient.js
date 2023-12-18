import { createClient } from "contentful";

const contentfulClient = createClient({
  space: "1v983nokqj8p",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default contentfulClient;
