### `0.1.0` _2014-06-23_
* *Breaking:* Changed data format from Zones+Rules to just Zones. [#82](https://github.com/moment/moment-timezone/pull/82)
* *Breaking:* Removed `moment.tz.{addRule,addZone,zoneExists,zones}` as they are no longer relevant with the new data format.
* Made library 20x faster. [JSPerf results](http://jsperf.com/moment-timezone-0-1-0/2)
* Completely rewrote internals to support new data format.
* Updated the data collection process to get data directly from http://www.iana.org/time-zones.
* Updated data to IANA TZDB `2014e`.
* Updated `bower.json` to use a browser specific `main:` entry point.
* Added built files with included data.
* Added support for accurately parsing input around DST changes. [#93](https://github.com/moment/moment-timezone/pull/93)
* Added comprehensive documentation at [momentjs.com/timezone/docs/](http://momentjs.com/timezone/docs/).
* Added `moment.tz.link` for linking two identical zones.
* Added `moment.tz.zone` for getting a loaded zone.
* Added `moment.tz.load` for loading a bundled version of data from the IANA TZDB.
* Added `moment.tz.names` for getting the names of all the loaded timezones.
* Added `moment.tz.unpack` and `moment.tz.unpackBase60` for unpacking data.
* Added `moment-timezone-utils.js` for working with the packed and unpacked data.
* Fixed major memory leak. [#79](https://github.com/moment/moment-timezone/issues/79)
* Fixed global export to allow use in web workers. [#78](https://github.com/moment/moment-timezone/pull/78)
* Fixed global export in browser environments that define `window.module`. [#76](https://github.com/moment/moment-timezone/pull/76)

### `0.0.6` _2014-04-20_
* Fixed issue with preventing loading moment-timezone more than once. [#75](https://github.com/moment/moment-timezone/pull/75)

### `0.0.5` _2014-04-17_
* Improved performance with memoization. [#39](https://github.com/moment/moment-timezone/issues/39)
* Published only necessary files to npm. [#46](https://github.com/moment/moment-timezone/issues/46)
* Added better handling of timezones around DST. [#53](https://github.com/moment/moment-timezone/issues/53) [#61](https://github.com/moment/moment-timezone/issues/61) [#70](https://github.com/moment/moment-timezone/issues/70)
* Added Browserify support. [#41](https://github.com/moment/moment-timezone/issues/41)
* Added `moment.tz.zoneExists` [#73](https://github.com/moment/moment-timezone/issues/73)
* Fixed cloning moments with a timezone. [#71](https://github.com/moment/moment-timezone/issues/71)
* Prevent loading moment-timezone more than once. [#74](https://github.com/moment/moment-timezone/issues/74)

### `0.0.3` _2013-10-10_
* Added Bower support.
* Added support for newer versions of moment.
* Added support for constructing a moment with a string and zone.
* Added more links and timezone names in moment-timezone.json

### `0.0.1` _2013-07-17_
* Initial version.