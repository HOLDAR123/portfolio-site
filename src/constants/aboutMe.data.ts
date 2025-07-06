export interface fileItemDataType {
  link: string,
  fileTitle: string,
}

export interface folderItemDataType {
  folderTitle: string,
  folderColor: 'red' | 'purple' | 'green',
  files: fileItemDataType[]
}

export interface categoryItemDataType {
  categoryTitle: string,
  folders?: folderItemDataType[],
  data?: string[]
}

export const categoryItemData: categoryItemDataType[] = [
  {
    categoryTitle: 'personal-info',
    folders: [
      {
        folderTitle: 'education',
        folderColor: 'red',
        files: [
          {
            link: 'high-school.md' ,
            fileTitle: "high-school",
          }
        ]
      },
      {
        folderTitle: 'bio',
        folderColor: 'green',
        files: [
          {
            link: 'about-me.md',
            fileTitle: "about-me",
          }
        ]
      },
      {
        folderTitle: 'interests',
        folderColor: 'purple',
        files: [
          {
            link: 'hobbies.md' ,
            fileTitle: "hobbies",
          }
        ]
      }
    ]
  },
]
