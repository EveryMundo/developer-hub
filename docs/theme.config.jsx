import { useRouter } from "next/router";
import HeaderLogo from "@/components/HeaderLogo";
import Ad from "@/components/Ad";

export default {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | Developer Hub Documentation | Everymundo",
      };
    }
  },
  logo: <HeaderLogo />,
  logoLink: false,
  project: {
    link: "https://github.com/EveryMundo/registry",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase:
    "https://github.com/EveryMundo/registry/blob/develop/packages/registry-docs2",
  footer: { component: null },
  banner: {
    key: "docs2.0-alpha",
    dismissible: true,
    text: <span>This is a work in progress. Feedback is welcome.</span>,
  },
  toc: {
    extraContent: <Ad />,
  },
};
