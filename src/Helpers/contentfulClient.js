import { createClient } from "contentful";

const contentfulClient = createClient({
  space: "1v983nokqj8p",
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export default contentfulClient;
