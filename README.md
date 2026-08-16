# MapConductor Icons for the United States — React

United States-specific map glyphs for MapConductor React. This pack is selected explicitly; it never changes because of browser locale.

## Installation

The first npm release is in preparation. Its install command will be:

```sh
npm install @mapconductor/react-icons @mapconductor/react-icons-us
```

To try the source now, clone `react-icons` at branch `0.2.0-2` and this repository beside it, then run `npm install && npm run build` in both directories. Install the built directories into your app with `npm install /path/to/react-icons /path/to/react-icons-us`.

## Quick start

```ts
import { PinGlyphIcon } from '@mapconductor/react-icons';
import { UnitedStatesMapIcons } from '@mapconductor/react-icons-us';

const interstateMarker = new PinGlyphIcon(UnitedStatesMapIcons.interstate, {
  fillColor: '#1565c0',
  glyphColor: '#ffffff',
});

const bitmapIcon = interstateMarker.toBitmapIcon();
```

Use `UnitedStatesMapIcons.postOffice` and `UnitedStatesMapIcons.policeStation` the same way. Glyph IDs and shapes match the Android and iOS packages.

<!-- BEGIN GENERATED ICON CATALOG -->
## Included glyphs

Glyph IDs are stable across Android, iOS, and React.

| Preview | API | Stable ID | Description |
|---|---|---|---|
| <img src="docs/icons/post_office.svg" width="40" height="40" alt="United States post office"> | `UnitedStatesMapIcons.postOffice` | `us.post_office` | United States post office |
| <img src="docs/icons/police_station.svg" width="40" height="40" alt="United States police station"> | `UnitedStatesMapIcons.policeStation` | `us.police_station` | United States police station |
| <img src="docs/icons/interstate.svg" width="40" height="40" alt="United States Interstate highway"> | `UnitedStatesMapIcons.interstate` | `us.interstate` | United States Interstate highway |
<!-- END GENERATED ICON CATALOG -->
