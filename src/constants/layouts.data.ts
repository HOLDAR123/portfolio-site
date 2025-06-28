import type HeaderDataItemType from "@/types/header.type.ts";
import LinkedInIcon from "@/assets/icons/LinkedInIcon.vue";

export const leftHeaderData: HeaderDataItemType[] = [
  {
    id: 1,
    name: 'HOLDAR',
    isStatic: true,
    isIndicator: true,
  },
  {
    id: 2,
    name: '_hello',
    link: '/',
    isIndicator: true,
  },
  {
    id: 3,
    name: '_about-me',
    link: '/about',
    isIndicator: true,
  },
  {
    id: 4,
    name: '_projects',
    link: '/projects',
    isIndicator: true,
  },
]

export const rightHeaderData: HeaderDataItemType[] = [
  {
    id: 1,
    name: '_contact-me',
    link: '/contact',
    isIndicator: true,
  },
]


export const leftFooterData = [
  {
    id: 1 ,
    name: 'find me in:'
  },
  {
    id: 2 ,
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/timur-yesmagambetov-2ab416298/?trk=opento_sprofile_details'
  },
  {
    id: 3 ,
    icon: LinkedInIcon,
    link: '/'
  },
]

export const rightFooterData = [
  {
    id: 1 ,
    name: '@HOLDAR123',
    icon: LinkedInIcon,
    link: 'https://github.com/HOLDAR123',
  },
]
