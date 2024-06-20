import React from "react"

import { SidebarNav, turnItemsIntoLinks } from "../sidebarNav"


const OmniSidebarNav = ({activePage}) => {


  const CertificationItems = [
    {
      link: "/certification/about",
      title: "About the Certification Program",
    },
    {
      link: "/certification/exam",
      title: "Taking the Exam",
    },
    {
      link: "/certification/study-guide",
      title: "Study Guide",
      children: [
        {
          link: "/certification/study-guide",
          title: "Introduction",
        },
        {
          link: "/certification/study-guide/webops",
          title: "Chapter 1: WebOps",
        },
        {
          link: "/certification/study-guide/platform",
          title: "Chapter 2: Pantheon Platform",
        },
        {
          link: "/certification/study-guide/create",
          title: "Chapter 3: Site Creation",
        },
        {
          link: "/certification/study-guide/cdn",
          title: "Chapter 4: Content Delivery Network",
        },
        {
          link: "/certification/study-guide/cms",
          title: "Chapter 5: CMS Infrastructure",
        },
        {
          link: "/certification/study-guide/deploy",
          title: "Chapter 6: The Deployment Pipeline",
        },
        {
          link: "/certification/study-guide/people",
          title: "Chapter 7: Connecting People",
        },
        {
          link: "/certification/study-guide/extend",
          title: "Chapter 8: Extend with CLI and Hooks",
        },
        {
          link: "/certification/study-guide/automate",
          title: "Chapter 9: Additional Automation",
        },
        {
          link: "/certification/study-guide/custom-upstreams",
          title: "Chapter 10: Custom Upstreams",
        },
      ]
    },
    {
      link: "https://certification.pantheon.io/",
      title: "↗ Certification Directory",
    },
  ]


  const CertificationLinks = turnItemsIntoLinks(CertificationItems, activePage);


  const OmniItems = [

    {
      link: "/get-started",
      title: "Get Started",
    },
    {
      link: "/certification",
      title: "WebOps Certification",
      children: CertificationItems
    }
  ];



const OmniLinks = turnItemsIntoLinks(OmniItems, activePage);


  return (
    <SidebarNav
      slot="guide-menu"
      title="WebOps Certification"
      links={OmniLinks} />
  )
}


export default OmniSidebarNav;


