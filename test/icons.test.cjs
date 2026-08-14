const assert = require('node:assert/strict');
const test = require('node:test');
const { UnitedStatesMapIcons } = require('../dist/index.js');
const { PinGlyphIcon } = require('@mapconductor/react-icons');

test('exports region-qualified United States glyphs', () => {
  assert.ok(Object.values(UnitedStatesMapIcons).every((icon) => icon.id.startsWith('us.')));
});

test('renders a United States glyph in the common pin container', () => {
  const bitmap = new PinGlyphIcon(UnitedStatesMapIcons.interstate).toBitmapIcon();
  assert.deepEqual(bitmap.anchor, { x: 0.5, y: 1 });
});
