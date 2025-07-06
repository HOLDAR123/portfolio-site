export interface FileContent {
  fileName: string
  content: string
  language?: string
}

export const fileContents: Record<string, FileContent> = {
  'high-school.md': {
    fileName: 'high-school.md',
    language: 'markdown',
    content: `# High School Education

## School Information
- **School Name**: Technical High School
- **Graduation Year**: 2020
- **Specialization**: Computer Science

## Achievements
- Graduated with honors
- Participated in programming competitions
- Led the school's coding club

## Key Subjects
- Mathematics
- Physics
- Computer Science
- English

## Projects
- Created a school management system
- Developed a mobile app for school events
- Built a website for the coding club`
  },

  'about-me.md': {
    fileName: 'about-me.md',
    language: 'markdown',
    content: `# About Me

## Personal Information
- **Name**: [Your Name]
- **Age**: [Your Age]
- **Location**: [Your City, Country]
- **Occupation**: Software Developer

## Background
I am a passionate software developer with a strong foundation in web development and a keen interest in creating user-friendly applications.

## Skills
- **Frontend**: Vue.js, React, TypeScript, HTML, CSS, SCSS
- **Backend**: Node.js, Python, Express
- **Database**: MongoDB, PostgreSQL
- **Tools**: Git, Docker, VS Code

## Experience
- 3+ years of experience in web development
- Worked on various projects from small business websites to large-scale applications
- Experience with agile development methodologies

## Education
- Bachelor's degree in Computer Science
- Various online courses and certifications
- Continuous learning and skill development`
  },

  'hobbies.md': {
    fileName: 'hobbies.md',
    language: 'markdown',
    content: `# Hobbies & Interests

## Programming
- Open source contributions
- Learning new technologies
- Building side projects
- Participating in hackathons

## Reading
- Technical books and documentation
- Science fiction novels
- Programming blogs and articles
- Tech news and updates

## Music
- Playing guitar
- Listening to various genres
- Attending concerts
- Learning music theory

## Gaming
- Strategy games
- Puzzle games
- Indie games
- Board games with friends`
  }
}
