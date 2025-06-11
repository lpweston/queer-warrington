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
  };

  export const eventsAroundPride: PrideEvent[] = [
    {
        location: WarringtonLocation.parrHall,
        name: "Pride Scratch Night",
        start: new Date("2025-06-12T19:00"),
        end: new Date("2025-06-12T11:59"),
        icon: "CW.jpg",
        link: "https://culturewarrington.org/whats-on/pride-scratch-night/",
        description: "Part of the Warrington Pride celebrations our latest Scratch Night will showcase the talents of creatives from the LGBTQ+ community.</br>Our Scratch Night gives performing artists and companies the opportunity to showcase their newly developed work to receive peer review and audience feedback to help develop their pieces and their practice.Full line up to be announced."
    },
    {
        location: WarringtonLocation.market,
        name: "'Making it Madonna', a tribute to the queen of pop",
        start: new Date("2025-06-13T18:00"),
        end: new Date("2025-06-13T21:15"),
        icon: "Logos-markets.png",
        description: "Warrington Market presents 'Making it Madonna', a tribute to the queen of pop, with support from the amazing Charlie Cooper.<br/>Join us at 6pm for a mesmerising performance from singer and pianist, Charlie Cooper, before the UK's most 'IMMACULATE' tribute to the Queen of Pop hits the stage at 8.15pm to celebrate Madonna in all her glory!</br>Performing all the hits from over 40 years in pop, this is the ultimate tribute night and it's completely free.</br>No age limit, but parental discretion is advised during the Madonna show."
    },
    {
        location: WarringtonLocation.parrHall,
        name: "The House, The Boys & The Trial",
        start: new Date("2025-06-27T19:00"),
        end: new Date("2025-06-27T21:00"),
        icon: "CW.jpg",
        link: "https://culturewarrington.org/whats-on/the-house-the-boys-the-trial/",
        description: "In May 1806, a public tavern in Warrington – known in the press as Sodomite House – was raided and all the men involved faced trial for the acts involved. This dramatised production tells the story of 5 men who were arrested on that fateful day and the trials that followed. After the success of 2024’s “Chicken”, Soup Productions returns with a new, heart wrenching drama based on true events.</br></br>This production is for ages16+ only. This show includes adult themes, discriminatory language and behaviours, violence and sexual abuse. "
    },
    {
        location: WarringtonLocation.parrHall,
        name: "The House, The Boys & The Trial",
        start: new Date("2025-06-28T19:00"),
        end: new Date("2025-06-28T21:00"),
        icon: "CW.jpg",
        link: "https://culturewarrington.org/whats-on/the-house-the-boys-the-trial/",
        description: "In May 1806, a public tavern in Warrington – known in the press as Sodomite House – was raided and all the men involved faced trial for the acts involved. This dramatised production tells the story of 5 men who were arrested on that fateful day and the trials that followed. After the success of 2024’s “Chicken”, Soup Productions returns with a new, heart wrenching drama based on true events.</br></br>This production is for ages16+ only. This show includes adult themes, discriminatory language and behaviours, violence and sexual abuse. "
    },
  ];

  export const allDayEvents: PrideEvent[] = [
    {
        location: WarringtonLocation.timeSquare,
        name: "Time Square: Warrington Pride",
        start: new Date("2025-06-14T12:30"),
        end: new Date("2025-06-14T20:00"),
        link: "https://timesquarewarrington.co.uk/events/warrington-pride-2025/",
        icon: "TimeSquare_Logo.svg",
        description: "A Lively programme of performances and games for all the family, hosted by drag sensation Kiki Inferno. The Time Square stage will deliver high-energy performances, party games, and live music all day long.<br/><br/>See schedule below for more information."
    },
    {
        location: WarringtonLocation.goldenSquare,
        name: "Golden Square Pride Carnival",
        start: new Date("2025-06-14T10:00"),
        end: new Date("2025-06-14T19:00"),
        link: "https://gswarrington.com/golden-square-pride-carnival/",
        img: "gs2.jpg",
        icon: "Golden-Square-Shopping-Centre.webp",
        description: `
        Golden Square is hosting a big Pride Carnival encouraging families to join in our celebration!<br/><br/>
        The Old Market Place Stage will play host to local community groups to provide live music performances and entertainment throughout the day.<br/><br/>
        Inside the Golden Square, look out for circus performers, face painters, and craft stalls. Community traders such as Grace Makes, 
        Phantom Cat Creations, Project Divine, Cheshire Cheese and HM Pasties will be selling handmade gifts and tasty treats.`
    },
    {
        location: WarringtonLocation.university,
        name: "University of Chester: Warrington Pride",
        start: new Date("2025-06-14T09:30"),
        end: new Date("2025-06-14T17:00"),
        icon: "uoc.png",
        description: "To celebrate Warrington Pride 2025, the University of Chester will be holding two excellent talks by staff and students from the University. Both are free to attend and will be fantastic opportunities to meet new people, listen to personal stories, and join important conversations.<br/><br/>There will also be a mixture of other events taking place during the day as we host and partner with a number of agencies and organisations, from arts and crafts to facilitated conversation spaces.<br/><br/>All are welcome!",
        link: "https://www.eventbrite.co.uk/e/1323652493239?aff=oddtdtcreator"
    },
    {
        location: WarringtonLocation.library,
        name: "Pride in Your Library",
        start: new Date("2025-06-14T11:00"),
        end: new Date("2025-06-14T14:00"),
        icon: "Livewire_Warrington_Alt.png",
        description: "Warrington Library is offering a range of crafts, including mindful colouring, badge making, 3D printed rainbows, marshmallow decorating, and a library trail for children from infant through to YA."
    },
    {
        location: WarringtonLocation.university,
        name: "Queer Coffee Changing Space",
        start: new Date("2025-06-14T09:30"),
        end: new Date("2025-06-14T16:00"),
        icon: "queerCoffeeLogo.webp",
        description: "Local community group Queer Coffee is hosting a safe space to change into your preferred clothes for Pride. Please feel welcome to come along to our private changing space at the University of Chester.<br/><br/>There is also a small selection of donated clothes if you want to try out new styles, and lockers are available to store items if needed.<br/><br/>Please note this space is available for adults (18+) only."
    },
    {
        location: WarringtonLocation.university,
        name: "Queer Coffee Zine Making",
        start: new Date("2025-06-14T10:00"),
        end: new Date("2025-06-14T17:00"),
        icon: "queerCoffeeLogo.webp",
        description: "Join Warrington Queer Coffee at the University of Chester as we make zines exploring the spectrum of queer experiences in Warrington.<br/><br/>Paper, pens and other zine-making supplies are available, as well as idea prompts and help for those new to zine-making.<br/><br/>For anyone 18+ who wants to express themselves through crafts, art or writing (or all three)."
    },
    {
        location: WarringtonLocation.university,
        name: "The Tender Heart Conversation Space",
        start: new Date("2025-06-14T10:00"),
        end: new Date("2025-06-14T15:30"),
        img: 'The-Tender-Heart-Conversation-Space.webp',
        icon: "StoryStitchers.png",
        description: "Come to Story Stitchers’s creative space to chat and connect, chill and reflect.<br/><br/>Leave messages of motivation on our Lemon Aid Line, create your own postcard poem  through collage that celebrates the spaces where you feel like you belong.<br/><br/>Whether you're 8 or 88, everybody is welcome to join us in celebrating Warrington Pride.  We'll provide good company, creative activities, a space to chill out and of course biscuits! (Commissioned by Culture Warrington)"
    },
        {
        location: WarringtonLocation.youthZone,
        name: "Warrington Youth Zone: Rainbow Family Day",
        start: new Date("2025-06-14T12:00"),
        end: new Date("2025-06-14T21:00"),
        icon: "WYZ.png",
        link: "https://warringtonyouthzone.org/membership/join-today/",
        description: `Pride themed activities for junior members (age 7-12) and their families at Warrington Youth Zone.
        Live music, disco party, arts & crafts, sports, climbing and much more.</br></br>No need to book in advance but there must be a junior member present with each family.
        Juniors are able to attend on their own too.<br/><br/>
        Followed by Pride After Party for WYZ Seniors! (Age 12-19) This will be an after party for young people to celebrate Pride, from 5pm Warrington Youth Zone will be offering a 
        range of exciting Pride themed activities.`
    },
    {
        location: WarringtonLocation.goldenSquare,
        name: "Discobowl Pride Party",
        start: new Date("2025-06-14T09:00"),
        end: new Date("2025-06-14T23:00"),
        description: "Open all day for all things fun! Soft play centre, Bowling, Golf, Pool, Arcades.<br/><br/>Face Painting 12-4pm DJ From 7pm. We'll have giveaways and prizes to be won all day, with our DJ taking all requests from 7pm.",
        link: "www.discobowl.co.uk/warrington",
        img: "Warrington-Pride-SQ-2.webp",
        icon: "thumb_DM-LOGO-WB-War_1.png"
    },
  ]

  export const scheduledEvents: PrideEvent[] = [
    {
        location: WarringtonLocation.university,
        name: "Inclusive Smear Testing: Creating Affirming Care for the LGBTQ+ Community - Debz Butler",
        icon: "uoc.png",
        start: new Date("2025-06-14T13:30"),
        end: new Date("2025-06-14T14:15"),
        description: `Lecture Room A (upstairs)<br/>
                      Debz Butler is a Senior Lecturer in Nursing at the University of Chester. She has over 10 years of clinical experience in oncology,
                      including gynaecology oncology. Her research interests include how we meet the needs of oncology patients from under-represented
                      populations and how social media impacts oncology knowledge. Her talk will raise awareness around the importance of inclusive smear
                      testing and will be of interest to those passionate about inclusive health care, not just health practitioners!`,
        link: "https://www.eventbrite.co.uk/e/1323652493239?aff=oddtdtcreator"
    },
    {
        location: WarringtonLocation.university,
        icon: "uoc.png",
        name: "Breaking Down Societal Barriers: From Sexuality to Disability - Stephanie Taylor",
        start: new Date("2025-06-14T14:30"),
        end: new Date("2025-06-14T15:15"),
        description: `Lecture Room A (upstairs)<br/>
                     Steph Taylor is a student at the University of Chester. She is also an athlete, performer and photographer. Come and hear her talk
                     about her experience of disability, her ‘coming out’ journey, how this impacted her college years (including her experience of being 
                     bullied and pulled out of school) and how she’s come to embrace her own value, identity and self-worth.`,
        link: "https://www.eventbrite.co.uk/e/1323652493239?aff=oddtdtcreator"
    },
    {
        location: WarringtonLocation.university,
        name: "Warrington Youth Zone Pride Arts Activity",
        icon: "WYZ.png",
        start: new Date("2025-06-14T10:15"),
        end: new Date("2025-06-14T11:45"),
        description: "Arts activity before the Pride Parade starts to make banners, flags, badges etc. The activity will finish at 11.45 to tie in with the parade starting at 12pm. Any age is welcome, it is targeted at families & young people who are celebrating Pride and taking part in the parade."
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "BIG FATT DANCE PARTY",
        icon: "CW.jpg",
        start: new Date("2025-06-14T11:00"),
        end: new Date("2025-06-14T12:00"),
        description: "Kicking off pride in style this year is Big Fatt Dance Party with Fatt Butcher, Blu Romantic & Alanna Boden. Expect powerhouse live vocals and wall to wall disco, dance, and queer club classics with some interactive dance routines to get audiences dancing and singing their hearts out before and after the pride march. (Commissioned by Culture Warrington)"
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "Pre-Parade Speeches",
        icon: "TimeSquare_Logo.svg",
        start: new Date("2025-06-14T11:30"),
        end: new Date("2025-06-14T12:00"),
        description: "Gather in Time Square ahead of the pride parade to hear a series of short speeches."
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "Pride Parade",
        icon: "TimeSquare_Logo.svg",
        start: new Date("2025-06-14T12:00"),
        end: new Date("2025-06-14T12:30"),
        description: "Join the march from Time Square to Old Market Square."
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "The Strayhorns",
        icon: "TimeSquare_Logo.svg",
        start: new Date("2025-06-14T12:30"),
        end: new Date("2025-06-14T13:15"),
        description: "Brassy bangers, sassy grooves and roaming joy, this ensemble brings the party to the people!",
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "A welcome from Kiki Inferno",
        icon: "TimeSquare_Logo.svg",
        start: new Date("2025-06-14T13:15"),
        end: new Date("2025-06-14T13:30"),
        description: "Due to popular demand, the return of Kiki, a global drag sensation known for her powerhouse vocals, dazzling stage presence and show-stopping numbers.",
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "Warrington Pride’s Ultimate Party Bingo",
        icon: "TimeSquare_Logo.svg",
        start: new Date("2025-06-14T13:30"),
        end: new Date("2025-06-14T14:15"),
        description: "Hosted by Kiki Inferno, this isn't your nan's bingo night. Expect glittering prizes, wild competitions, classic dancefloor anthems, and enough sass to fill the bingo hall twice over.",
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "PopVox Choir",
        icon: "TimeSquare_Logo.svg",
        start: new Date("2025-06-14T14:15"),
        end: new Date("2025-06-14T14:45"),
        description: "This inclusive choir brings the feel-good factor to the square.",
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "The Strayhorns",
        icon: "TimeSquare_Logo.svg",
        start: new Date("2025-06-14T14:45"),
        end: new Date("2025-06-14T15:30"),
        description: "Brassy bangers, sassy grooves and roaming joy, this ensemble brings the party to the people!",
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "Warrington Pride’s Ultimate Party Bingo",
        icon: "TimeSquare_Logo.svg",
        start: new Date("2025-06-14T15:30"),
        end: new Date("2025-06-14T16:15"),
        description: "Hosted by Kiki Inferno, this isn't your nan's bingo night. Expect glittering prizes, wild competitions, classic dancefloor anthems, and enough sass to fill the bingo hall twice over.",
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "Jack Buckley",
        icon: "TimeSquare_Logo.svg",
        start: new Date("2025-06-14T16:15"),
        end: new Date("2025-06-14T17:00"),
        description: "Manchester singer/songwriter Jack brings a different take of covers including songs by Lana Del Rey, Chappell Roan & Billie Eilish, alongside some of his own original songs.",
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "Kiki Inferno and special guests",
        icon: "TimeSquare_Logo.svg",
        start: new Date("2025-06-14T17:00"),
        end: new Date("2025-06-14T18:00"),
        description: "Get ready to turn up the heat with Warrington’s biggest drag queen, Kiki Inferno, as she storms the Pride stage with a show-stopping set full of powerhouse vocals, high-energy dance anthems, and party bangers that'll have you living your best life from start to finish! Joining Kiki on stage are the rising stars of tomorrow — talented Performing Arts students from Warrington’s Royal Vale College. These fierce young dancers have choreographed much of the show themselves, bringing fresh, dynamic energy and creativity that’s not to be missed.",
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "Roaming performers",
        icon: "TimeSquare_Logo.svg",
        start: new Date("2025-06-14T18:00"),
        end: new Date("2025-06-14T18:30"),
        description: "Be mesmerised by Las Vegas-style acts involving Magic Spheres and Juggling. ",
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "Sweet Like Sabrina",
        icon: "TimeSquare_Logo.svg",
        start: new Date("2025-06-14T18:30"),
        end: new Date("2025-06-14T19:15"),
        description: "this stunning tribute to upcoming pop princess, Sabrina Carpenter pays tribute to one of the world’s biggest stars by perfectly embodying her incredible vocals, sassy energy and stage presence. She delivers a show that is fun & vibrant, whilst capturing some of Sabrina’s most iconic moments & choreography from her ‘Short & Sweet’ tour.",
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "Kiki Inferno Disco",
        icon: "TimeSquare_Logo.svg",
        start: new Date("2025-06-14T19:15"),
        end: new Date("2025-06-14T20:00"),
        description: "Kiki closes the day with a disco set to take us through to 8pm.",
    },
    {
        location: WarringtonLocation.timeSquare,
        name: "Saturday Night Pride at Gravity Social",
        icon:"grav.svg",
        start: new Date("2025-06-14T19:30"),
        end: new Date("2025-06-14T24:00"),
        img: "grav.jpg",
        link: "https://www.instagram.com/p/DJ8tjiXKAvC/?igsh=MTJudHkwMjR5OTY2cA%3D%3D",
        description: "Saturday Night Pride at Gravity Social. Tallulah Guard with Rain McMey. All your favorites to soundtrack your Saturday night. Live muse, pool, shuffl, AR darts and more. Free entry.",
    },
    {
        location: WarringtonLocation.youthZone,
        name: "Rainbow Family Day",
        icon: "WYZ.png",
        start: new Date("2025-06-14T12:00"),
        end: new Date("2025-06-14T16:00"),
        link: "https://warringtonyouthzone.org/membership/join-today/",
        description: "Pride themed activities for junior members (age 7-12) and their families at Warrington Youth Zone. The family day will have something for all ages to enjoy & engage with celebrating Warrington Pride including performances from young people, live music, disco party, arts & crafts, sports, climbing and much more.</br>No need to book in advance but there must be a junior member present with each family. Juniors are able to attend on their own too."
    },
    {
        location: WarringtonLocation.youthZone,
        name: "Warrington Youth Zone Pride After Party",
        icon: "WYZ.png",
        start: new Date("2025-06-14T17:00"),
        end: new Date("2025-06-14T21:00"),
        link: "https://warringtonyouthzone.org/membership/join-today/",
        description: "Pride After Party for WYZ Seniors! (Age 12-19) This will be an after party for young people to celebrate Pride, from 5pm Warrington Youth Zone will be offering a range of exciting Pride themed activities.</br>No need to book in advance but young people will need to be members before attending. 50p entry."
    },
    {
        location: WarringtonLocation.oldMarketPlace,
        name: "Big Fatt Dance Party",
        icon: "CW.jpg",
        start: new Date("2025-06-14T12:30"),
        end: new Date("2025-06-14T13:00"),
        description: "Kicking off pride in style this year is Big Fatt Dance Party with Fatt Butcher, Blu Romantic & Alanna Boden. Expect powerhouse live vocals and wall to wall disco, dance, and queer club classics with some interactive dance routines to get audiences dancing and singing their hearts out before and after the pride march. (Commissioned by Culture Warrington)"
    },
    {
        location: WarringtonLocation.oldMarketPlace,
        name: "A Place Where We Belong - TAGS",
        icon: "tagsIcon.webp",
        start: new Date("2025-06-14T13:00"),
        end: new Date("2025-06-14T13:30"),
        description: "Get ready for an unforgettable afternoon on the Golden Square Stage as TAGS Youth Services proudly presents A Place Where We Belong - a powerful showcase of dance, acting, and singing performances by their talented service users, celebrating what it means to be from Warrington. "
    },
    {
        location: WarringtonLocation.oldMarketPlace,
        name: "Warrington Youth Zone Takes the Stage",
        icon: "WYZ.png",
        start: new Date("2025-06-14T13:30"),
        end: new Date("2025-06-14T14:15"),
        description: "Warrington Youth Zone takes over the stage with a showcase of local young talent-including singers, dancers, rappers and choirs-celebrating Pride through performance."
    },
    {
        location: WarringtonLocation.oldMarketPlace,
        name: "A Place Where We Belong - TAGS",
        icon: "tagsIcon.webp",
        start: new Date("2025-06-14T14:30"),
        end: new Date("2025-06-14T16:30"),
        description: "Get ready for an unforgettable afternoon on the Golden Square Stage as TAGS Youth Services proudly presents A Place Where We Belong - a powerful showcase of dance, acting, and singing performances by their talented service users, celebrating what it means to be from Warrington. "
    },
    {
        location: WarringtonLocation.oldMarketPlace,
        name: "Drew's Dirty Disco",
        icon: "Golden-Square-Shopping-Centre.webp",
        start: new Date("2025-06-14T17:00"),
        end: new Date("2025-06-14T19:00"),
        img: "drews.jpg",
        description: "Drew's Dirty Disco is a two-hour set of disco, camp, and queer-themed music. The playlist promises to be a seamless mix of old-school classics and modern hits, all masterfully remixed into disco tunes. Big camp bangers with lots of space to dance whilst having access to a number of bars, coffee shops & amazing eateries!Be awesome to see you there."
    },
        {
        location: WarringtonLocation.goldenSquare,
        name: "Silent Disco",
        icon: "Golden-Square-Shopping-Centre.webp",
        start: new Date("2025-06-14T13:00"),
        end: new Date("2025-06-14T17:00"),
        description: "Don’t miss the return of the ever-popular Silent Disco."
    },
    {
        location: WarringtonLocation.goldenSquare,
        name: "Lush - Bath Bomb Workshop",
        icon: "lush.png",
        start: new Date("2025-06-14T13:00"),
        end: new Date("2025-06-14T14:00"),
        description: `Join us for our Warrington Pride Workshop at LUSH Warrington! Get ready to dive into a world of fizz and 
        fragrance as we teach you how to create your very own bath bomb. <br/><br/>
        This in-person event will take place on Saturday, 14th June and Sunday, 15th June at 1pm. Make your way to our store 
        located at Golden Square Shopping Centre, Warrington, WA1 1QB and immerse yourself in the art of bath bomb making.`,
        link: "https://www.eventbrite.co.uk/e/warrington-pride-workshop-tickets-1360767776049"
    },
    {
        location: WarringtonLocation.goldenSquare,
        name: "After Party at Disco Bowl",
        icon: "thumb_DM-LOGO-WB-War_1.png",
        start: new Date("2025-06-14T19:00"),
        end: new Date("2025-06-14T24:00"),
        description: "The after-party continues at Disco Bowl with an evening DJ set and unlimited disco bowling* from 6.00pm."
    },
    {
        location: WarringtonLocation.geekRetreat,
        name: "Get Your Geek On! comedy Night",
        icon: "geekretreat.png",
        start: new Date("2025-06-14T20:00"),
        end: new Date("2025-06-14T23:00"),
        description: "LGBT comedy night featuring live music raising funds for the Sophie Lancaster Foundation. 18+ only",
        link: "https://www.ticketsource.co.uk/whats-on/warrington/geek-retreat-warrington/get-your-geek-on/2025-06-14/20:00/t-dvdpeod",
        img: "get-your-geek-on.webp"
    },
    {
        location: WarringtonLocation.parrHall,
        icon: "CW.jpg",
        name: "PRIDE After Party",
        start: new Date("2025-06-14T20:30"),
        end: new Date("2025-06-15T00:00"),
        link: "https://culturewarrington.org/whats-on/pride-after-party/",
        description:"Put on your dancing shoes and get ready to go out-out for the official Warrington Pride After Party. Join your host cabaret superstar and legend in their own mind Fatt Butcher (The Voice UK) with a stellar line-up of some of the UK’s best independent queer talent from the worlds of cabaret, drag, burlesque, dance, club culture and DJs. So let’s come together, celebrate, and stand united under the disco ball for a Pride night to remember. (Commissioned by Culture Warrington)"
    },
];