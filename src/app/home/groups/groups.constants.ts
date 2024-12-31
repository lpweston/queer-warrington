
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
    link?: string,
    icon: string,
    iconAlt: string
  }

export const groups: GroupInfo[] = [
  {
    name: "Queer Coffee",
    subtitle: 'Adult Group',
    icon: 'queer-coffee-icon',
    imagePath: '/assets/images/queerCoffeePhoto.webp',
    description: `This group started to be a queer safe place in the warrington area. It's a group for everyone: the shes/zies/theys/hes/zers and everyone in-between who is part of the LGBTQIA+ community.<br/><br/>
        We meet up (at a minimum) on the last Saturday of each month at the Geek Retreat Warrington at 11.30 am. And are open to adding different locations and different activities on top of this.
        This group is for anyone aged 18 or over.`,
    links: [
      {
        name: "",
        link: 'https://linktr.ee/queercoffee',
        icon: '/assets/icons/linktree.webp',
        iconAlt: 'Queer Coffee Linktree',
      },
      { 
        name: "",
        link: 'https://www.facebook.com/groups/warringtonqueercoffee',
        icon: '/assets/icons/fb-wh.webp',
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
    name: "TAGS",
    subtitle: 'Youth Group',
    icon: 'tags-icon',
    imagePath: '/assets/images/tagsIcon.webp',
    description: `TAGS provides LGBTQ+ 1-2-1 targeted support or group support to young people aged 11-17 years (Youth TAGS) and 17 - 24 years.
                  Tags provides a safe space for LGBTQ+ young people to meet, socialise, access support, and develop skills and confidence.
                  Tags aims to empower young people to be active members of the group, to inspire them to pursue leading roles in the future - 
                  the group is entirely LGBTQ+ youth-led. to enable us to access additional funding to help support the group to provide additional
                   opportunities for young people.`,
    links: [
      {
        name: "",
        link: 'https://www.warrington.gov.uk/node/11259',
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
    imagePath: '/assets/images/Logo-1-loving-me.webp',
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
        icon: '/assets/icons/linktree.webp',
        iconAlt: 'Queer Coffee Linktree',
      },
      { 
        name: "",
        link: 'https://www.facebook.com/lovingme.uk?_rdr',
        icon: '/assets/icons/fb-wh.webp',
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
    imagePath: '/assets/images/CWA.webp',
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
    name: 'Warrington LGBTQ+ Social network',
    link: 'https://www.facebook.com/groups/875204472503810',
    icon: '/assets/icons/fb.webp',
    iconAlt: "Facebook"
  },
  {
    name: 'LGBT Warrington',
    link: 'https://www.facebook.com/groups/lgbtwarrington',
    icon: '/assets/icons/fb.webp',
    iconAlt: "Facebook"
  },
  {
    name: 'North-West Lesbians (Over 35) UK',
    link: 'https://www.facebook.com/groups/1265007937483904',
    icon: '/assets/icons/fb.webp',
    iconAlt: "Facebook"
  }
]

export const companies: GroupInfo[] = [
  {
    name: 'Sam Small Ink',
    description: `Hey, I'm Sam and welcome to Sam Small Ink! Our ink-slinging haven where we create stories on skin.<br />
                  We're masters of the art of Dot work, illustration & blackwork tattoos, and we've been doing it for over 6 years in Warrington. <br />
                  If you're looking for a safe, friendly space to get your tatt on, then you've come to the right place! We love all our peeps, 
                  especially our LGQBTQ+ pals, and guess what? Our tattoos are all vegan friendly too! So, let's get to work and make some tattoo magic! `,
    icon: 'sam-icon',
    subtitle: "Tattoo Parlour",
    imagePath: "/assets/images/sam.jpeg",
    links: [
      {
      link: 'https://samsmallink.co.uk/',
      name: "",
      icon: "home",
      iconAlt: "Homepage"
      },
      {
        link: "https://www.instagram.com/sam_small_ink_",
        name: "",
        icon: '/assets/icons/Instagram_Glyph_White.svg',
        iconAlt: "Instagram"
      }
    ],
  },
  {
    name: 'Porter\'s Ale House',
    subtitle: "Bar",
    icon: 'storefront',
    imagePath: "/assets/images/porters.png",
    description: "",
    links: [
      {
        name: "",
        link: "https://www.facebook.com/groups/woapah/?locale=en_GB",
        icon: '/assets/icons/fb-wh.webp',
        iconAlt: 'Facebook'
      }
    ]
  },
  {
    name: 'Jacqueline Fontaine',
    icon: 'storefront',
    subtitle: "Comedian",
    imagePath: "/assets/images/jacqueline.png",
    description: `Jacqueline Fontaine is a comedian, cabaret artist and titled countess! Called the Welsh Joan Rivers by Radio Cymru despite being English,
                  she's known for hosting pride/queer events across the country and for her charity work`,
    links: [
      {
        name: "",
        link: "https://www.instagram.com/jacqueline_fontaine_comedy/",
        icon: '/assets/icons/Instagram_Glyph_White.svg',
        iconAlt: 'Instagram'
      }
    ]
  }
]

export const friendly: SocialInfo[] = [
  {
    name: 'Central Library & Museum',
    icon: 'storefront',
    iconAlt: ""
  },
  {
    name: 'Coven Hair And Beauty',
    link: 'https://linktr.ee/covenbeauty',
    icon: 'storefront',
    iconAlt: ""
  },
  {
    name: 'Geek Retreat',
    link: 'https://www.facebook.com/GeekRetreatWarrington',
    icon: 'storefront',
    iconAlt: ""
  },
  {
    name: 'Culture Warrington',
    link: 'https://culturewarrington.org/',
    icon: 'storefront',
    iconAlt: ""
  },
  {
    name: 'Deaf Centre',
    link: 'https://warringtondeafcentre.wixsite.com/warrington-deaf-club',
    icon: 'storefront',
    iconAlt: ""
  },
  {
    name: 'Mamar\'s',
    icon: 'storefront',
    iconAlt: ""
  },
  {
    name: 'Nice N Naughty',
    link: 'https://nicennaughty.co.uk/',
    icon: 'storefront',
    iconAlt: ""
  },
  {
    name: 'Dolly Daydream',
    link: 'https://www.dolly-daydream.co.uk',
    icon: 'storefront',
    iconAlt: ""
  },
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
  {
    name: 'TransActual',
    subtitle: "TransActual are a trans led and run advocacy, education and empowerment organisation.",
    link: 'https://transactual.org.uk/',
    icon: 'volunteer_activism',
    iconAlt: ""
  },
  {
    name: 'Gendered Intelligence',
    subtitle: "Expanding understandings of gender to improve trans lives.",
    link: 'https://genderedintelligence.co.uk/',
    icon: 'volunteer_activism',
    iconAlt: ""
  },
]