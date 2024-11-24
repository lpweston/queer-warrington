
export type GroupInfo = {
    name: string,
    subtitle:string,
    icon: string,
    imagePath: string,
    description: string
    links: SocialInfo[]
  }

export type SocialInfo = {
    name: string,
    subtitle?: string,
    link: string,
    icon: string,
    iconAlt: string
  }

export const groups: GroupInfo[] = [
  {
    name: "Queer Coffee",
    subtitle: 'Community Group',
    icon: 'queer-coffee-icon',
    imagePath: '/assets/images/queerCoffeePhoto.png',
    description: `This group started to be a queer safe place in the warrington area. It's a group for everyone: the shes/zies/theys/hes/zers and everyone in-between who is part of the LGBTQIA+ community.<br/><br/>
        We meet up (at a minimum) on the last Saturday of each month at the Geek Retreat Warrington at 11.30 am. And are open to adding different locations and different activities on top of this.
        This group is for anyone aged 18 or over.`,
    links: [
      {
        name: "",
        link: 'https://linktr.ee/queercoffee',
        icon: '/assets/icons/linktree.png',
        iconAlt: 'Queer Coffee Linktree',
      },
      { 
        name: "",
        link: 'https://www.facebook.com/groups/warringtonqueercoffee',
        icon: '/assets/icons/fb-wh.png',
        iconAlt: 'Queer Coffee Facebook'
      },
      { 
        name: "",
        link: 'https://discord.com/invite/4xFx7KuGH5',
        icon: '/assets/icons/discord-mark-white.svg',
        iconAlt: 'Queer Coffee Discord'
      },
    ]
  },
  {
    name: "Example Group",
    subtitle: 'Community Group',
    icon: 'queer-coffee-icon',
    imagePath: '/assets/images/download.png',
    description: `This is an example group, and some example text in here to see how it would look.
    Please contact us via email or via our website`,
    links: [
      {
        name: "",
        link: 'https://www.google.com',
        icon: 'home',
        iconAlt: 'home',
      },
    ]
  }
]

export const supportServices: GroupInfo[] = [
  {
    name: "LovingMe",
    subtitle: 'Support Service',
    icon: 'loving-me-icon',
    imagePath: '/assets/images/Logo-1-loving-me.png',
    description: `We work with trans / non-binary adults in England who are experiencing domestic abuse or sexual violence. 
    We offer one-to-one support and advocacy, and have a refuge in Lancashire which is specifically for trans / non-binary people.
    We have a small team of staff all of whom are trans or non-binary ourselves.<br/><br/>
    Call: 07902 478958<br/>
    Email: help@lovingme.uk`,
    links: [
      {
        name: "",
        link: 'https://www.lovingme.uk/',
        icon: 'home',
        iconAlt: 'Loving Me Website',
      },
      {
        name: "",
        link: 'https://linktr.ee/lovingme_uk',
        icon: '/assets/icons/linktree.png',
        iconAlt: 'Queer Coffee Linktree',
      },
      { 
        name: "",
        link: 'https://www.facebook.com/lovingme.uk?_rdr',
        icon: '/assets/icons/fb-wh.png',
        iconAlt: 'Loving Me Facebook'
      },
      { 
        name: "",
        link: 'https://www.instagram.com/lovingme_uk/',
        icon: '/assets/icons/Instagram_Glyph_White.svg',
        iconAlt: 'Loving Me Instagram'
      },
    ]
  },
  {
    name: "Trans Without Abuse",
    subtitle: 'Support Service',
    icon: 'cwa-icon',
    imagePath: '/assets/images/CWA.png',
    description: `Cheshire Without Abuse (CWA) offer support across the whole of Cheshire. Our main domestic abuse service is with CWA 
    and offers support to everyone; inclusive of all of the LGBTQIA+ communities.
    Trans without Abuse specifically supports trans and non-binary people, across Cheshire, that have been affected by domestic abuse.
    We also offer professional training in trans and non-binary domestic abuse practice, as well as bespoke programmes for domestic abuse recovery.<br/><br/
    Call: 01270 972 208<br/>
    Email: debbie.c@mycwa.org.uk`,
    links: [
      {
        name: "",
        link: 'https://www.transwithoutabuse.org.uk',
        icon: 'home',
        iconAlt: 'Trans without abuse Website',
      },
    ]
  }
]

export const socials: SocialInfo[] = [
  {
    name: 'LGBT group 1',
    link: 'https://www.google.com',
    icon: '/assets/icons/fb.png',
    iconAlt: "facebook"
  },
  {
    name: 'LGBT group 2',
    link: 'https://www.google.com',
    icon: '/assets/icons/fb.png',
    iconAlt: "facebook"
  },
  {
    name: 'LGBT group 3',
    link: 'https://www.google.com',
    icon: '/assets/icons/fb.png',
    iconAlt: "facebook"
  }
]

export const companies: SocialInfo[] = [
  {
    name: 'LGBT company 1',
    link: 'https://www.google.com',
    icon: 'storefront',
    iconAlt: ""
  },
  {
    name: 'LGBT company 2',
    link: 'https://www.google.com',
    icon: 'storefront',
    iconAlt: ""
  },
  {
    name: 'LGBT company 3',
    link: 'https://www.google.com',
    icon: 'storefront',
    iconAlt: ""
  }
]

export const charities: SocialInfo[] = [
  {
    name: 'Albert Kennedy Trust',
    subtitle: "Helping young LGBTQ+ people at risk of or experiencing homelessness or hostile living environment.",
    link: 'https://www.akt.org.uk/',
    icon: 'volunteer_activism',
    iconAlt: ""
  },
  {
    name: 'Mermaids',
    subtitle: "Supporting trans, non-binary and gender-diverse children, young people and their families",
    link: 'https://mermaidsuk.org.uk/',
    icon: 'volunteer_activism',
    iconAlt: ""
  },
]