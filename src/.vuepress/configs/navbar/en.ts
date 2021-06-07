import type { NavbarConfig } from "@vuepress/theme-default";

export const en: NavbarConfig = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Blog",
    link: "/blog/",
  },
  {
    text: "Guides",
    link: "/guides/",
  },
  {
    text: "Portfolio",
    link: "/portfolio/",
  },
  {
    text: "More",
    children: [
      {
        text: "This website",
        children: [
          "/changes/",
          "/privacy/",
          {
            text: "Source code",
            link: "https://github.com/northcampr/website",
          },
          {
            text: "Tor version",
            link: "http://nciwf3vh63efdjqymcpq2uey2ahufyskyzeon4zomd6vg4lpdg5vfiyd.onion/",
          },
        ],
      },
      {
        text: "Connect with me",
        children: [
          {
            text: "GitHub",
            link: "https://github.com/northcampr",
          },
          {
            text: "Twitter",
            link: "https://twitter.com/northcampr",
          },
        ],
      },
      {
        text: "Sponsoring",
        children: [
          {
            text: "Send me a drink on Ko-Fi",
            link: "https://ko-fi.com/northcampr",
          },
          {
            text: "Sponsor me on a monthly basis",
            link: "https://github.com/sponsors/northcampr",
          },
        ],
      },
    ],
  },
];
