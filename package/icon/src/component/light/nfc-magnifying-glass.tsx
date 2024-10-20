
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-magnifying-glass` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-magnifying-glass?s=light nfc-magnifying-glass}
 * @preview ![nfc-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/nfc-magnifying-glass.svg)
 */
const NfcMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 64L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l288 0c16.6 12.5 35.8 21.8 56.6 27.1c-7.6 3.2-15.9 4.9-24.6 4.9L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 64c-11 0-21.7 1.1-32 3.2L416 96c0-17.7-14.3-32-32-32zm0 64l0 45.3c-11.4 5-22.2 11.3-32 18.7l0-64-112 0 0 82.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-82.7c0-17.7 14.3-32 32-32l112 0c17.7 0 32 14.3 32 32zM320 416L96 416c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 256 205.3 0c5 11.4 11.3 22.2 18.7 32zM224 240a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM448 416.2a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0 32c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 29.6-10 56.8-26.9 78.5l86.2 86.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-86.2-86.2c-21.7 16.9-48.9 26.9-78.5 26.9z" />
    </Icon>
);

export default NfcMagnifyingGlass;