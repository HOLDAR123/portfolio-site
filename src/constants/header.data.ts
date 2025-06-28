import type HeaderDataItemType from "@/types/header.type.ts";

export const leftHeaderData: HeaderDataItemType[] = [
  {
    id: 1,
    name: 'HOLDAR123',
    isStatic: true
  },
  {
    id: 2,
    name: '_hello',
    link: '/hello'
  },
  {
    id: 3,
    name: '_about-me',
    link: '/about'
  },
  {
    id: 4,
    name: '_projects',
    link: '/projects'
  },
]

export const rightHeaderData: HeaderDataItemType[] = [
  {
    id: 1,
    name: '_contact-me',
    link: '/contact'
  },
]
