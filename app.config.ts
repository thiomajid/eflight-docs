export default defineAppConfig({
  docus: {
    title: "EfLight",
    titleTemplate: "%s | EfLight",
    description: "Goodbye to boilerplate using Framework Core.",
    image: "./public/cover.png",
    socials: {
      twitter: "ThioMajid",
      github: "ATOM36/EfLight",
    },
    github: {
      dir: "eflight-docs",
      branch: "main",
      repo: "eflight-docs",
      owner: "ATOM36",
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: false,
      title: "EfLight",
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
    footer: {
      credits: {
        icon: "basil:user-solid",
        text: "Abdoul Majid Thiombiano\n\n Copyright © 2023 - present MIT license",
        href: "https://thiomajid.vercel.app",
      },
      fluid: true,
    },
  },
});
