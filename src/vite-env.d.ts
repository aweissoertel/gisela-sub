/// <reference types="vite/client" />
interface Departure {
    plannedDepartureTime: number,
    realtime: boolean,
    delayInMinutes: number,
    realtimeDepartureTime: number,
    transportType: string,
    label: string,
    network: string,
    trainType: string,
    destination: string,
    cancelled: boolean,
    sev: boolean,
    platform: number,
    messages: string[],
    bannerHash: string,
    occupancy: string,
    stopPointGlobalId: string,
}