  export type PrideEvent = {
    name: string,
    location: WarringtonLocation,
    start: Date,
    end: Date,
    description?: string,
    link?: string,
    img?: string,
    icon?: string
  }

  export enum WarringtonLocation {
      goldenSquare = "Golden Square",
      oldMarketPlace = "Old Market Place",
      university = "University of Chester",
      library = "Library",
      timeSquare = "Time Square",
      geekRetreat = "Geek Retreat",
      youthZone = "Warrington Youth Zone",
      parrHall = "Parr Hall",
      market = "Warrington Market",
      posternGate = "Postern Gate"
  };

  export const eventsAroundPride: PrideEvent[] = [
    {
        location: WarringtonLocation.parrHall,
        name: "Pride Scratch Night",
        start: new Date("2026-06-11T19:30"),
        end: new Date("2026-06-11T23:59"),
        icon: "CW.jpg",
        link: "",
        description: "Parr Hall relaunches Culture Warrington's Scratch Night as part of Pride week, featuring four short work-in-progress performances from up-and-coming LGBTQ+ artists.<br/> 7.30pm (16+) £5, Parr Hall."
    },
  ];

  export const scheduledEvents: PrideEvent[] = [
    {
        location: WarringtonLocation.library,
        name: "Central Library Pride",
        start: new Date("2026-06-13T10:00"),
        end: new Date("2026-06-13T12:00"),
        link: "https://livingwellwarrington.org/activity/celebrate-pride-day-with-us-at-warrington-central-library",
        icon: "",
        description: "Join the joyful morning celebration featuring 3D printing, craft, badge making, and colourful refreshments. Suitable for families.<br/> Additionally look out at all LiveWire branches which feature curated book displays ranging from bold debut authors to beloved classic novels during the pride season."
    },
    {
        location: WarringtonLocation.university,
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
        name: "Queer Coffee Lounge",
        start: new Date("2026-06-13T11:00"),
        end: new Date("2026-06-13T16:00"),
        icon: "queerCoffeeLogo.webp",
        description: "Free drinks and clothes + changing space and lockers. Space to chill out, chat, play games or do craft. Feel free to bring your own hobby!... 11.30am - 4.00pm",
        link: "https://wearewarringtonbid.co.uk/events/warrington-pride/"
    },
    {
        location: WarringtonLocation.university,
        name: "Speaker's Corner: Exploring Queer History with Jasmine Lawrie",
        start: new Date("2026-06-13T13:00"),
        end: new Date("2026-06-13T13:30"),
        icon: "uoc.png",
        description: "Lecture Room A (upstairs), Exploring Queer History with Jasmine Lawrie, writer and musician, from 1.30pm until 2pm",
        link: "https://wearewarringtonbid.co.uk/events/warrington-pride/"
    },
    {
        location: WarringtonLocation.university,
        name: "Speaker's Corner: Q&A with Amanda Hilton",
        start: new Date("2026-06-13T14:20"),
        end: new Date("2026-06-13T15:00"),
        icon: "uoc.png",
        description: "Lecture Room A (upstairs), Q&A with Amanda Hilton, lead trustee of Liverpool City Regional Pride Foundation and Chair of Warrington Pride Planning Group from 2.20pm until 3pm",
        link: "https://wearewarringtonbid.co.uk/events/warrington-pride/"
    },
    {
        location: WarringtonLocation.timeSquare,
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
        location: WarringtonLocation.parrHall,
        name: "Pride After Party",
        start: new Date("2026-06-13T20:00"),
        end: new Date("2026-06-13T23:59"),
        icon: "CW.jpg",
        description: `A flamboyant, vibrant, joyous, big energy after party where everyone is welcome to come as they are. Various acts including:
        <br/>FATT BUTCHER: Introducing your host! @fattbutcher is an award-winning cabaret artist, vocalist and professional hot mess. They received the coveted four-chair turn on ITV’s The Voice and are the 2022 Winner of Drag Idol UK!
        <br/>BLU ROMANTIC: Born in Grimsby and adopted by the Midlands, @bluromantic is the The daddy of Birmingham drag. A celebrated host, comedy-king and vocalist, Blü was a national finalist in Drag Idol 2023.
        <br/>ALANNA BODEN:@alannaboden is a Birmingham-based powerhouse vocalist whose sound is steeped in the rich traditions of disco, Motown and gospel.
        <br/>Tickets are from £9.`,
        link: ""
    },
    {
        location: WarringtonLocation.geekRetreat,
        name: "Get Your Geek On!",
        start: new Date("2026-06-13T20:00"),
        end: new Date("2026-06-13T23:00"),
        icon: "geekretreat.png",
        img: "geek2026.jpg",
        description: `Another year, another fabulous celebration of queer comedy! All proceeds are going towards the new CIC Flourish True Self Collective supporting trans and non binary people in Warrington`,
        link: "https://www.ticketsource.com/jacqueline-fontaine/get-your-geek-on-fundraiser-night/e-xpzbjm?fbclid"
    },
];