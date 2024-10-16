
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
      subtitle: '18+',
      icon: 'queer-coffee-icon',
      imagePath: '/assets/images/queerCoffeePhoto.png',
      description: `This group started to be a queer safe place in the warrington area. It's a group for everyone: the shes/zies/theys/hes/zers and everyone in-between who is part of the LGBTQIA+ community.<br/>
          We meet up (at a minimum) on the last Saturday of each month at the Geek Retreat Warrington at 11.30 am. And are open to adding different locations and different activities on top of this.
          This group is for anyone aged 18 or over.`,
      link: 'https://linktr.ee/queercoffee'
    },
    {
      name: "Lorem Ipsum",
      subtitle: '11-17 and 17-24 years',
      icon: 'tags-icon',
      imagePath: '/assets/images/download.png',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      link: 'https://www.google.com'
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