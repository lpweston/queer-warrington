import { LocationDetail } from "./time.util";

  // get these from google api?
  type prideEvent = {
    name: string,
    location: WarringtonLocation,
    start: string,
    end: string,
    description: string,
    link: string
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

  export const test: LocationDetail[] = [
    {
        name: WarringtonLocation.market,
        events: [
            // {
            //     name: "Kiki Inferno and Friends Drag Cabaret",
            //     //value: 10
            //     start:   new Date("2024-06-07T20:00"),
            //     end:  new Date("2024-06-07T23:00")
            // },
            {
                name: "Live Music",
                //value: 20,
                start:   new Date("2024-06-08T20:00"),
                end:  new Date("2024-06-08T24:00")

            }
        ]
    },
    {
        name: WarringtonLocation.university,
        events: [
            // {
            //     name: "Place to Pause Conversation Space",
            //     //value: 30,
            //     start: new Date("2024-06-08T10:00"),
            //     end: new Date("2024-06-08T15:00")
            // },
            // {
            //     name: "I Put My Love In Your Hands",
            //     //value: 30,
            //     start: new Date("2024-06-08T10:00"),
            //     end: new Date("2024-06-08T16:00")
            // },
            {
                name: "Male Presenting: Creating Fiction from Facts",
                //value: 30,
                start: new Date("2024-06-08T10:30"),
                end: new Date("2024-06-08T11:00")
            },
            {
                name: "Tour",
                //value: 30,
                start: new Date("2024-06-08T11:30"),
                end: new Date("2024-06-08T12:00")
            },
            {
                name: "Our Stonewall: Remembering the Camp Revolt Against Section 28",
                //value: 30,
                start: new Date("2024-06-08T12:30"),
                end: new Date("2024-06-08T13:00")
            },
            {
                name: "Transgender and Transition: Lived Experience from Amanda Hilton",
                //value: 30,
                start: new Date("2024-06-08T13:15"),
                end: new Date("2024-06-08T13:45")
            },
            // {
            //     name: "Get set for Pride",
            //     //value: 30,
            //     start: new Date("2024-06-08T10:00"),
            //     end: new Date("2024-06-08T11:00")
            // },
        ]
    },
    {
        name: WarringtonLocation.library,
        events: [
            {
                name: "LGBT+ book event",
                //value: 30,
                start: new Date("2024-06-08T12:30"),
                end: new Date("2024-06-08T13:30")
            },
            // {
            //     name: "Activities",
            //     //value: 30,
            //     start: new Date("2024-06-08T11:00"),
            //     end: new Date("2024-06-08T14:00")
            // },
        ]
    },
    {
        name: WarringtonLocation.goldenSquare,
        events: [
            {
                name: "Information and support hub",
                //value: 30,
                start: new Date("2024-06-08T11:00"),
                end: new Date("2024-06-08T18:00")
            },
        ]
    },
    {
        name: WarringtonLocation.oldMarketSquare,
        events: [
            // {
            //     name: "Crafty Fox Glitter and Face Painting",
            //     //value: 30,
            //     start: new Date("2024-06-08T11:00"),
            //     end: new Date("2024-06-08T23:00")
            // },
            {
                name: "Dance performances",
                //value: 30,
                start: new Date("2024-06-08T12:10"),
                end: new Date("2024-06-08T12:25")
            },
            {
                name: "Queerera Fashion Show",
                //value: 30,
                start: new Date("2024-06-08T12:25"),
                end: new Date("2024-06-08T12:50")
            },
            {
                name: "Variety Performance",
                //value: 30,
                start: new Date("2024-06-08T12:50"),
                end: new Date("2024-06-08T13:25")
            },
            {
                name: "Queerera Fashion Show",
                //value: 30,
                start: new Date("2024-06-08T13:25"),
                end: new Date("2024-06-08T14:05")
            },
            {
                name: "Variety performances",
                //value: 30,
                start: new Date("2024-06-08T14:05"),
                end: new Date("2024-06-08T14:20")
            },
            {
                name: "Dance performances",
                //value: 30,
                start: new Date("2024-06-08T14:20"),
                end: new Date("2024-06-08T14:30")
            },
            {
                name: "Silent disco",
                //value: 30,
                start: new Date("2024-06-08T14:30"),
                end: new Date("2024-06-08T16:00")
            },
            {
                name: "Glitter",
                //value: 30,
                start: new Date("2024-06-08T18:00"),
                end: new Date("2024-06-09T02:00")
            },
        ]
    },
    {
        name: WarringtonLocation.timeSquare,
        events: [
            {
                name: "Pre-parade speeches",
                //value: 30,
                start: new Date("2024-06-08T11:00"),
                end: new Date("2024-06-08T11:30")
            },
            {
                name: "Parade",
                //value: 30,
                start: new Date("2024-06-08T11:30"),
                end: new Date("2024-06-08T12:00")
            },
        ]
    },
    {
        name: WarringtonLocation.youthZone,
        events: [
            {
                name: "Juniors Rainbow Party",
                //value: 30,
                start: new Date("2024-06-08T11:30"),
                end: new Date("2024-06-08T13:00")
            },
            {
                name: "Seniors Rainbow Party",
                //value: 30,
                start: new Date("2024-06-08T16:00"),
                end: new Date("2024-06-08T22:00")
            },
        ]
    },
    {
        name: WarringtonLocation.hive,
        events: [
            {
                name: "Pride at the Hive",
                //value: 30,
                start: new Date("2024-06-08T19:30"),
                end: new Date("2024-06-08T24:00")
            },
        ]
    },
    // {
    //     name: WarringtonLocation.pavilion,
    //     events: [
    //         {
    //             name: "Coffee and Cakes",
    //             //value: 30,
    //             start: new Date("2024-06-09T13:00"),
    //             end: new Date("2024-06-09T16:00")
    //         },
    //     ]
    // },
    // {
    //     name: WarringtonLocation.pyramid,
    //     events: [
    //         {
    //             name: "Chicken",
    //             //value: 30,
    //             start: new Date("2024-06-11T19:00"),
    //             end: new Date("2024-06-11T23:00")
    //         },
    //         {
    //             name: "Chicken",
    //             //value: 30,
    //             start: new Date("2024-06-12T19:00"),
    //             end: new Date("2024-06-12T23:00")
    //         },
    //     ]
    // },
];