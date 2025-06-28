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
    isStatic: false,
    isIndicator: true,
  },
  {
    id: 3,
    name: '_about-me',
    link: '/about',
    isStatic: false,
    isIndicator: true,
  },
  {
    id: 4,
    name: '_projects',
    link: '/projects',
    isStatic: false,
    isIndicator: true,
  },
]

export const rightHeaderData: HeaderDataItemType[] = [
  {
    id: 1,
    name: '_contact-me',
    link: '/contact',
    isStatic: false,
    isIndicator: true,
  },
]


export const leftFooterData = [
  {
    id: 1 ,
    name: 'find me in:',
    isStatic: false,
  },
  {
    id: 2 ,
    icon: LinkedInIcon,
    isStatic: false,
    link: 'https://www.linkedin.com/in/timur-yesmagambetov-2ab416298/?trk=opento_sprofile_details'
  },
  {
    id: 3 ,
    icon: LinkedInIcon,
    isStatic: false,
    link: '/'
  },
]

export const rightFooterData = [
  {
    id: 1 ,
    name: '@HOLDAR123',
    icon: LinkedInIcon,
    isStatic: false,
    link: 'https://github.com/HOLDAR123',
  },
]
