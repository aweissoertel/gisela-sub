# gisela-sub

A small app mimicing the [subway departure screen](https://www.u-bahn-muenchen.de/betrieb/zugzielanzeiger/) of my subway station, Munich Giselastraße.

Designed to run on a raspberry-pi in kiosk mode.

## Customizing
You can edit `config.ts` to match your own subway station, change the offset or to adjust the number of departures displayed.

### Quick Override
To have a quick look at departures of your station (without an own deployment), set the LocalStorage entry `station` to your stationId (e.g. `de:09162:500` for Münchner Freiheit).
