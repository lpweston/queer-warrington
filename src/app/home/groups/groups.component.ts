import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

type GroupInfo = {
  name: string,
  subtitle:string,
  icon: string,
  imagePath: string,
  description: string
  link: string
}

type socialInfo = {
  name: string,
  link: string,
  icon: string
}

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {
  groups: GroupInfo[] = [
    {
      name: "Queer Coffee",
      subtitle: '18+',
      icon: 'queer-coffee-icon',
      imagePath: '/assets/images/queerCoffeePhoto.png',
      description: `This group started to be a queer safe place in the warrington area. It's a group for everyone: the shes/zies/theys/hes/zers and everyone in-between who is part of the LGBTQIA+ community.
          <br/>
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

  socials: socialInfo[] = [
    {
      name: 'LGBT Warrington',
      link: 'https://www.facebook.com/groups/lgbtwarrington/',
      icon: '/assets/images/fb.png'
    },
    {
      name: 'Warrington LGBTQ+',
      link: 'https://www.facebook.com/groups/875204472503810/',
      icon: '/assets/images/fb.png'
    }
  ]
}
