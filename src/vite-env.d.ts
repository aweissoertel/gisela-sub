/// <reference types="vite/client" />

interface Departure {
    canceled: boolean;
    delay: number;
    departureId: string;
    destination: string;
    infoMessages: string[];
    label: string;
    lineBackgroundColor: string;
    live: boolean;
    platform: string;
    product: string;
    sev: boolean;
    stopPositionNumber: number;
}

interface ApiResponse {
    departures: Departure[];
    servingLines: any[];
}
