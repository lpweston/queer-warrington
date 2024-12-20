  // get these from google api?
  export type PrideEvent = {
    name: string,
    location: WarringtonLocation,
    start: Date,
    end: Date,
    description?: string,
    link?: string
  }

  export enum WarringtonLocation {
    timeSquare = "Time Square",
    market = "Market",
    university = "University of Chester",
    goldenSquare = "Golden Square",
    library = "Library",
    oldMarketSquare = "Old Market Square",
    youthZone = "Youth Zone",
    hive = "The Hive",
    pavilion = "The Pavilion",
    pyramid = "Pyramid Art Centre"
  }

  export const test: PrideEvent[] = [
    {
        location: WarringtonLocation.market,
        name: "Kiki Inferno and Friends Drag Cabaret",
        start:   new Date("2024-06-07T20:00"),
        end:  new Date("2024-06-07T23:00"),
    },
    {
        location: WarringtonLocation.market,
        name: "Live Music",
        start:   new Date("2024-06-08T20:00"),
        end:  new Date("2024-06-08T24:00")
    },
    {
        location: WarringtonLocation.university,
        name: "Place to Pause Conversation Space",
        start: new Date("2024-06-08T10:00"),
        end: new Date("2024-06-08T15:00")
    },
    {
        location: WarringtonLocation.university,
        name: "I Put My Love In Your Hands",
        start: new Date("2024-06-08T10:00"),
        end: new Date("2024-06-08T16:00")
    },
    {
        location: WarringtonLocation.university,
        name: "Male Presenting: Creating Fiction from Facts",
        start: new Date("2024-06-08T10:30"),
        end: new Date("2024-06-08T11:00")
    },
    {
        location: WarringtonLocation.university,
        name: "Tour",
        start: new Date("2024-06-08T11:30"),
        end: new Date("2024-06-08T12:00")
    },
    {
        location: WarringtonLocation.university,
        name: "Our Stonewall: Remembering the Camp Revolt Against Section 28",
        start: new Date("2024-06-08T12:30"),
        end: new Date("2024-06-08T13:00")
    },
    {
        location: WarringtonLocation.university,
        name: "Transgender and Transition: Lived Experience from Amanda Hilton",
        start: new Date("2024-06-08T13:15"),
        end: new Date("2024-06-08T13:45")
    },
    {
        location: WarringtonLocation.university,
        name: "Get set for Pride",
        start: new Date("2024-06-08T10:00"),
        end: new Date("2024-06-08T11:00")
    },
    {
        location: WarringtonLocation.library,
        name: "LGBT+ book event",
        start: new Date("2024-06-08T12:30"),
        end: new Date("2024-06-08T13:30")
    },
    {
        location: WarringtonLocation.library,
        name: "Activities",
        start: new Date("2024-06-08T11:00"),
        end: new Date("2024-06-08T14:00")
    },
    {
        location: WarringtonLocation.goldenSquare,
        name: "Information and support hub",
        start: new Date("2024-06-08T11:00"),
        end: new Date("2024-06-08T18:00")
    },
    {
        location: WarringtonLocation.oldMarketSquare,
        name: "Crafty Fox Glitter and Face Painting",
        start: new Date("2024-06-08T11:00"),
        end: new Date("2024-06-08T23:00")
    },
    {
        location: WarringtonLocation.oldMarketSquare,
        name: "Dance performances",
        start: new Date("2024-06-08T12:10"),
        end: new Date("2024-06-08T12:25")
    },
    {
        location: WarringtonLocation.oldMarketSquare,
        name: "Queerera Fashion Show",
        start: new Date("2024-06-08T12:25"),
        end: new Date("2024-06-08T12:50")
    },
    {
        location: WarringtonLocation.oldMarketSquare,
        name: "Variety Performance",
        start: new Date("2024-06-08T12:50"),
        end: new Date("2024-06-08T13:25")
    },
    {
        location: WarringtonLocation.oldMarketSquare,
        name: "Queerera Fashion Show",
        start: new Date("2024-06-08T13:25"),
        end: new Date("2024-06-08T14:05")
    },
    {
        location: WarringtonLocation.oldMarketSquare,
        name: "Variety performances",
        start: new Date("2024-06-08T14:05"),
        end: new Date("2024-06-08T14:20")
    },
    {
        location: WarringtonLocation.oldMarketSquare,
        name: "Dance performances",
        start: new Date("2024-06-08T14:20"),
        end: new Date("2024-06-08T14:30")
    },
    {
        location: WarringtonLocation.oldMarketSquare,
        name: "Silent disco",
        start: new Date("2024-06-08T14:30"),
        end: new Date("2024-06-08T16:00")
    },
    {
        location: WarringtonLocation.oldMarketSquare,
        name: "Glitter",
        start: new Date("2024-06-08T18:00"),
        end: new Date("2024-06-09T02:00")
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "Pre-parade speeches",
        start: new Date("2024-06-08T11:00"),
        end: new Date("2024-06-08T11:30")
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "Parade",
        start: new Date("2024-06-08T11:30"),
        end: new Date("2024-06-08T12:00")
    },
    {
        location: WarringtonLocation.youthZone,
        name: "Juniors Rainbow Party",
        start: new Date("2024-06-08T11:30"),
        end: new Date("2024-06-08T13:00")
    },
    {
        location: WarringtonLocation.youthZone,
        name: "Seniors Rainbow Party",
        start: new Date("2024-06-08T16:00"),
        end: new Date("2024-06-08T22:00")
    },
    {
        location: WarringtonLocation.hive,
        name: "Pride at the Hive",
        
        start: new Date("2024-06-08T19:30"),
        end: new Date("2024-06-08T24:00")
    },
    {
        location: WarringtonLocation.pavilion,
        name: "Coffee and Cakes",
        start: new Date("2024-06-09T13:00"),
        end: new Date("2024-06-09T16:00")
    },
    {
        location: WarringtonLocation.pyramid,
        name: "Chicken",
        start: new Date("2024-06-11T19:00"),
        end: new Date("2024-06-11T23:00")
    },
    {
        location: WarringtonLocation.pyramid,
        name: "Chicken",
        start: new Date("2024-06-12T19:00"),
        end: new Date("2024-06-12T23:00")
    },
];