
export type GroupInfo = {
    name: string,
    subtitle:string,
    icon: string,
    imagePath: string,
    description: string
    link: string
  }
  
export type SocialInfo = {
    name: string,
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
      link: 'https://linktr.ee/queercoffee'
    },
    {
      name: "LovingMe",
      subtitle: 'Support Service',
      icon: 'loving-me-icon',
      imagePath: '/assets/images/Logo-1-loving-me.png',
      description: `We work with trans / non-binary adults in England who are experiencing domestic abuse or sexual violence. 
      We offer one-to-one support and advocacy, and have a refuge in Lancashire which is specifically for trans / non-binary people.
      We have a small team of staff all of whom are trans or non-binary ourselves.<br/><br/>
      Website: <a href='lovingme.uk'>lovingme.uk</a><br/>
      Call: 07902 478958<br/>
      Email: help@lovingme.uk`,
      link: 'https://linktr.ee/lovingme_uk'
    },
    {
      name: "Trans Without Abuse",
      subtitle: 'Support Service',
      icon: 'cwa-icon',
      imagePath: '/assets/images/CWA.png',
      description: `Cheshire Without Abuse (CWA) offer support across the whole of Cheshire. Our main domestic abuse service is with CWA 
      and offers support to everyone; inclusive of all of the LGBTQIA+ communities.
      Trans without Abuse specifically supports trans and non-binary people, across Cheshire, that have been affected by domestic abuse.
      We also offer professional training in trans and non-binary domestic abuse practice, as well as bespoke programmes for domestic abuse recovery.<br/><br/>
      Website: <a href='www.transwithoutabuse.org.uk'>www.transwithoutabuse.org.uk</a><br/>
      Call: 01270 972 208<br/>
      Email: debbie.c@mycwa.org.uk`,
      link: 'www.transwithoutabuse.org.uk'
    }
  ]

  export const socials: SocialInfo[] = [
    {
      name: 'LGBT group 1',
      link: 'https://www.google.com',
      icon: '/assets/images/fb.png',
      iconAlt: "facebook"
    },
    {
      name: 'LGBT group 2',
      link: 'https://www.google.com',
      icon: '/assets/images/fb.png',
      iconAlt: "facebook"
    },
    {
      name: 'LGBT group 3',
      link: 'https://www.google.com',
      icon: '/assets/images/fb.png',
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