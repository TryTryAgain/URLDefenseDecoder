# URLDefenseDecoder

**ALPHA RELEASE**

###### v0.0.1 is a quick release with known issues!

URLDefenseDecoder is a Chrome Extension which provides the ability to "copy a decoded Proofpoint URLDefense URL to clipboard via Chrome's right-click context menu."

## Usage
Right-Click a URLDefense encoded URL, or triple-click-select-all of a plaintext URLDefense URL, and right-click to get a Chrome Context Menu option called "Copy URLDefense-Decoded-Link". Click that menu item and the link will be copied to your clipboard.

![Screenshot](assets/URLDefenseDecoder_screenshot01.png)

## Known Issues

All of which should be cleaned up in due time...
1. Code is not commented, there's no error handling/logging, sorry.
2. This is my first Chrome Extension/Javascript dive, I'm likely misusing the architecture.
3. Hyperlinks are incorrectly duplicating, therefore nesting the menu, as they're being classified as both selection and link contexts. Also, refer to issue 4 below.
4. All selections create a context menu item, I'd like to fix this so that only selections which contain a certain regex match for https://urldefense.proofpoint.com ... refer to issue 2 above ;-)
5. The popup, for manual decoding, is not functioning yet. Decoding only exists via right-click menu.
6. I've only tested for /v2 URLs as I don't have access to /v1 Proofpoint, but I assume /v1 will work. And it has not been tested with outrageously complex syntax, but it should work well.

[Please report issues!](https://github.com/TryTryAgain/URLDefenseDecoder/issues)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature, fixed XYZ bugs.'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Changelog

07/26/2017
Initial Commit v0.0.1

## Credits/Licenses

Chrome Extension: [Michael Lawler](https://github.com/TryTryAgain) --- Released under [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)

Icon Artwork: Paul Davey aka [Mattahan @ DeviantArt](http://mattahan.deviantart.com/art/Buuf-37966044) --- [All Rights Reserved.](https://creativecommons.org/licenses/by-nc-sa/2.5/)

[Original Python Implementation](https://help.proofpoint.com/@api/deki/files/177/URLDefenseDecode.py?revision=1) and Inspiration
