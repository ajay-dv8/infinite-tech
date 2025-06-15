
interface generalInfoProps {
  name?: string
  fullName?: string
  shortName?: string

  emailLabel?: string
  emailDescription?: string
  email?: string

  officeLabel?: string
  officeDescription?: string
  officeAddress?: string

  phoneLabel?: string
  phoneDescription?: string
  phone?: string
  phoneTwo?: string

  phoneTwoLink?: string
  emailLink?: string
  phoneLink?: string

  socials?: {
    tiktok?: string
    instagram?: string
    facebook?: string 
    linkedin?: string
    youtube?: string
    github?: string
    X?: string
  }
}

export const generalInfo: generalInfoProps = {
  shortName:"ITS",
  name: "Infinit",
  fullName: "Infinit Tech Solutions",

  // email
  emailLabel: "Email",
  emailDescription: "We respond to all emails within 24 hours.",
  emailLink: "infinittechsolutions.info@gmail.com",
  email: "info@its.com",
  // office location
  officeLabel: "Office",
  officeDescription: "Drop by our office for a chat.",
  officeAddress: "1 Eagle St, Brisbane, QLD, 4000",
  // phone line
  phoneLabel: "Phone",
  phoneDescription: "We're available Mon-Fri, 9am-5pm.",
  
  phone: "+233 54 989 6135",
  phoneLink: "+233549896135",
  phoneTwo: "+233 20 145 8927",
  phoneTwoLink: "+233201458927", 
}


export const socials = [
  {
    name: "X (Twitter)",
    link: "https://x.com/infinit_tech_gh?t=2l1gejSLKSX4xkBtLNqnBw&s=09",
  }, 
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/company/infinit-tech-solutions",
  },
]