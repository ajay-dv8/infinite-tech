// TODO: CHANGE DATA TO FIT SITE


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

  emailLink?: string
  phoneLink?: string
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
  phone: "+233 50 647 0919",
  phoneLink: "+233506470919"
}