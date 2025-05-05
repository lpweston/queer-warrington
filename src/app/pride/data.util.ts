import { PrideEvent, WarringtonLocation } from "./pride2025.constants";

export function getEventsByLocation(events: PrideEvent[]): Map<WarringtonLocation, PrideEvent[]> {
    const eventsByLocation = new Map<WarringtonLocation,PrideEvent[]>()
    Object.values(WarringtonLocation).forEach(location=>{
        eventsByLocation.set(location, [])
        })

    events.forEach(e => {
        eventsByLocation.get(e.location)?.push(e);
    })

    return eventsByLocation;
}

export function getListOfLocations(): string[] {
    return Object.values(WarringtonLocation).map(v => v.toString())
}