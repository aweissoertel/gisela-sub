/// <reference types="vite/client" />
interface Departure {
    plannedDepartureTime: number;
    realtime: boolean;
    delayInMinutes: number;
    realtimeDepartureTime: number;
    transportType: string;
    label: string;
    divaId: string;
    network: string;
    trainType: string;
    destination: string;
    cancelled: boolean;
    sev: boolean;
    platform: number;
    platformChanged: boolean;
    messages: string[];
    infos: string[];
    bannerHash: string;
    occupancy: string;
    stopPointGlobalId: string;
    lineId: string;
}