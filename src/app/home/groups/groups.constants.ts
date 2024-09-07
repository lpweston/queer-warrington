
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
    icon: string
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
      name: "Tags",
      subtitle: '11-17 and 17-24 years',
      icon: 'tags-icon',
      imagePath: '/assets/images/tagsIcon.jpg',
      description: `TAGS provides LGBTQ+ 1-2-1 targeted support or group support to young people aged 11-17 years (Youth TAGS) and 17-24 years.<br/>
            Tags provides a safe space for LGBTQ+ young people to meet, socialise, access support, and develop skills and confidence.<br/>
            Tags aims to empower young people to be active members of the group, to inspire them to pursue leading roles in the future - the group is entirely LGBTQ+ youth-led. to enable us to access additional funding to help support the group to provide additional opportunities for young people.`,
      link: 'https://www.warrington.gov.uk/node/11259'
    }
  ]

  export const socials: SocialInfo[] = [
    {
      name: 'LGBT Warrington',
      link: 'https://www.facebook.com/groups/lgbtwarrington/',
      icon: '/assets/images/fb.png'
    },
    {
      name: 'Warrington LGBTQ+',
      link: 'https://www.facebook.com/groups/875204472503810/',
      icon: '/assets/images/fb.png'
    },
    {
      name:'Northern Lesbians',
      link:'https://www.facebook.com/groups/Nlesuk/',
      icon: '/assets/images/fb.png'
    }
  ]

  export const companies: SocialInfo[] = [
    {
      name: 'Sam Small Ink',
      link: 'https://samsmallink.co.uk/',
      icon: 'storefront'
    },
    {
      name: 'Coven Beauty',
      link: 'https://www.facebook.com/covenbeautyacademy/',
      icon: 'storefront'
    },
    {
      name:'Mamars',
      link:'https://mamars.co.uk/',
      icon: 'storefront'
    }
  ]