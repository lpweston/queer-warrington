export type Info = {
    name: string,
    icon: string,
    iconAlt?: string,
    imagePath: string,
    description?: string,
    subtitle?:string,
    link?: string|string[],
    links?: SocialInfo[]
    location?: string,
    start?: Date | undefined;
    end?: Date | undefined;
}

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
    link?: string | string[],
    icon: string,
    iconAlt: string,
    description?: string,
    location?: string,
  }

export interface EventData {
    name: string;
    description: string;
    location: string;
    link?: string;
    start: Date | undefined;
    end: Date | undefined;
  }
  