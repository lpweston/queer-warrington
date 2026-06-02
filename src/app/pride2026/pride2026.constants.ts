  export type PrideEvent = {
    name: string,
    location: WarringtonLocation,
    address: string,
    start: Date,
    end: Date,
    description?: string,
    link?: string,
    img?: string,
    icon?: string
  }

  export enum WarringtonLocation {
      goldenSquare = "Golden Square",
      university = "University of Chester",
      library = "Library",
      timeSquare = "Time Square",
      geekRetreat = "Geek Retreat",
      market = "Warrington Market",
      popinns = "Pop-Inns Musical Theatre Bar",
      friendsMeetingHouse = "Friends Meeting House",
      theOldSchool = "The Old School",
      discobowl = "Discobowl",
  };

  export enum WarringtonLocationAddress {
      goldenSquare = "Golden Square, Old Market Place, Warrington WA1 1QB",
      university = "University of Chester, 2 Time Square, Warrington WA1 2NT",
      library = "Library, Museum St, Warrington WA1 1HU",
      timeSquare = "Time Square, Warrington WA1 2NT",
      geekRetreat = "Geek Retreat, 4 Crown Parade, Warrington WA1 2AE",
      market = "Warrington Market, 2 Time Square, Warrington WA1 2NT",
      popinns = "Pop-Inns Musical Theatre Bar, 2a Cairo St, Warrington WA1 1EE",
      friendsMeetingHouse = "Friends Meeting House, 1 Academy St, Warrington WA1 2NR",
      theOldSchool = "The Old School, 17 Fairfield St, Warrington WA1 3AJ",
      discobowl = "Discobowl, 77 The Mall, Golden Square Shopping Centre, Warrington WA1 1QE",
  };

  export const eventsAroundPride: PrideEvent[] = [
    {
        location: WarringtonLocation.friendsMeetingHouse,
        address: WarringtonLocationAddress.friendsMeetingHouse,
        name: "Rainbow Connections Pride",
        start: new Date("2026-06-11T19:00"),
        end: new Date("2026-06-11T21:00"),
        icon: "rainbow-connection.png",
        link: "https://www.facebook.com/events/1393074139272010/",
        description: `Ahead of Warrington Pride, We are hosting a social evening.
                    Think cakes, brews and the odd bit of spontanious singing.
                    This wont be a formal rehersal but a chance to come along and find out more about our choir.
                    We are unfunded so we would ask for a small donation`
    },
    {
        location: WarringtonLocation.theOldSchool,
        address: WarringtonLocationAddress.theOldSchool,
        name: "Queer Crafts",
        start: new Date("2026-06-12T18:00"),
        end: new Date("2026-06-12T21:00"),
        icon: "Queer_Crafts_Logo.png",
        description: `Queer crafts will be meeting as usual on Friday at The Old School.
                    We will be bringing cardboard and sharpies for anyone who wants to make signs for the parade.
                    Or feel free to bring your own craft project to work on.<br/>
                    If you have been thinking of coming along to our events, this is a great opportunity to join us for the first time!`
    },
  ];

  export const scheduledEvents: PrideEvent[] = [
    {
        location: WarringtonLocation.library,
        address: WarringtonLocationAddress.library,
        name: "Central Library Pride",
        start: new Date("2026-06-13T10:00"),
        end: new Date("2026-06-13T12:00"),
        link: "https://livingwellwarrington.org/activity/celebrate-pride-day-with-us-at-warrington-central-library",
        icon: "",
        description: "Join the joyful morning celebration featuring 3D printing, craft, badge making, and colourful refreshments. Suitable for families.<br/> Additionally look out at all LiveWire branches which feature curated book displays ranging from bold debut authors to beloved classic novels during the pride season."
    },
    {
        location: WarringtonLocation.university,
        address: WarringtonLocationAddress.university,
        name: "Craft Pride with Warrington Youth Zone",
        start: new Date("2026-06-13T10:00"),
        end: new Date("2026-06-13T14:00"),
        icon: "WYZ.png",
        description: "Enterprise Craft Stall and Arts & Crafts Table outside of the University of Chester building on Time Square from 11am until 3pm. Families and young people can come to create flags, banners and badges to carry in the parade.",
        link: "https://wearewarringtonbid.co.uk/events/warrington-pride/",
        img:"wyz2026.png"
    },
    {
        location: WarringtonLocation.university,
        address: WarringtonLocationAddress.university,
        name: "Queer Coffee Lounge",
        start: new Date("2026-06-13T11:00"),
        end: new Date("2026-06-13T16:00"),
        icon: "queerCoffeeLogo.webp",
        description: "Free drinks and clothes + changing space and lockers. Space to chill out, chat, play games or do craft. Feel free to bring your own hobby!... 11.30am - 4.00pm",
        link: "https://wearewarringtonbid.co.uk/events/warrington-pride/"
    },
    {
        location: WarringtonLocation.university,
        address: WarringtonLocationAddress.university,
        name: "Speaker's Corner: Exploring Queer History with Jasmine Lawrie",
        start: new Date("2026-06-13T13:00"),
        end: new Date("2026-06-13T13:30"),
        icon: "uoc.png",
        description: "Lecture Room A (upstairs), Exploring Queer History with Jasmine Lawrie, writer and musician, from 1.30pm until 2pm",
        link: "https://wearewarringtonbid.co.uk/events/warrington-pride/"
    },
    {
        location: WarringtonLocation.university,
        address: WarringtonLocationAddress.university,
        name: "Speaker's Corner: Q&A with Amanda Hilton",
        start: new Date("2026-06-13T14:20"),
        end: new Date("2026-06-13T15:00"),
        icon: "uoc.png",
        description: "Lecture Room A (upstairs), Q&A with Amanda Hilton, lead trustee of Liverpool City Regional Pride Foundation and Chair of Warrington Pride Planning Group from 2.20pm until 3pm",
        link: "https://wearewarringtonbid.co.uk/events/warrington-pride/"
    },
    {
        location: WarringtonLocation.timeSquare,
        address: WarringtonLocationAddress.timeSquare,
        name: "Pride Parade",
        start: new Date("2026-06-13T11:30"),
        end: new Date("2026-06-13T12:30"),
        icon: "",
        description: `Hundreds of people are expected to take part in this year’s Pride parade, including local charities, businesses, community groups, and allies. You may be walking as a group, representing a business, or showing your support as an individual. Everyone is invited to be part of this welcoming and inclusive celebration.
        People gather from 11.30, it will begin at 12 noon at Time Square and will make its way through the town to Golden Square, arriving there at approximately 12.30pm.`,
        link: "https://wearewarringtonbid.co.uk/warrington-pride-2026/"
    },
    {
        location: WarringtonLocation.goldenSquare,
        address: WarringtonLocationAddress.goldenSquare,
        name: "Golden Square Pride",
        start: new Date("2026-06-13T12:00"),
        end: new Date("2026-06-13T19:00"),
        link: "https://wearewarringtonbid.co.uk/events/drews-dirty-disco-presents-gs-pride-2026/",
        img: "GS-Pride-2026.jpg",
        icon: "Golden-Square-Shopping-Centre.webp",
        description: `Entertainment in Golden Square between 12-7pm. Includes the Drag Superstar contest final (family friendly, of course) and Drew's Dirty Disco.<br/>
        You can also catch the Warrington Youth Zone and TAGS present a Musical Medley on the Golden Square stage from 12.45pm – 1.45pm, featuring singers, dancers and much more performed by local young people.`
    },
    {
        location: WarringtonLocation.popinns,
        address: WarringtonLocationAddress.popinns,
        name: "Karaoke",
        start: new Date("2026-06-13T14:30"),
        end: new Date("2026-06-13T18:00"),
        link: "https://www.facebook.com/groups/635886610834758/user/61575925427914/",
        icon: "popins.webp",
        description: "Pop-Inns Musical Theatre Bar will be hosting karaoke from  2.30pm until 6pm."
    },
    {
        location: WarringtonLocation.discobowl,
        address: WarringtonLocationAddress.discobowl,
        name: "Strike with Pride",
        start: new Date("2026-06-13T19:00"),
        end: new Date("2026-06-13T23:00"),
        icon: "discobowl.jpg",
        img: "discobowl2026.jpg",
        description: `Once the party finishes outside, we'll be ready with Unlimited Bowling, 90s/00s/10s Anthems, Competitions & Giveaways from 7pm.`,
        link: "https://www.discobowl.co.uk/warrington"
    },
    {
        location: WarringtonLocation.geekRetreat,
        address: WarringtonLocationAddress.geekRetreat,
        name: "Get Your Geek On!",
        start: new Date("2026-06-13T20:00"),
        end: new Date("2026-06-13T23:00"),
        icon: "geekretreat.png",
        img: "geek2026.jpg",
        description: `Another year, another fabulous celebration of queer comedy! All proceeds are going towards the new CIC Flourish True Self Collective supporting trans and non binary people in Warrington`,
        link: "https://www.ticketsource.com/jacqueline-fontaine/get-your-geek-on-fundraiser-night/e-xpzbjm?fbclid"
    },
];