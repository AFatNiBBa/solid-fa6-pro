
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-magnifying-glass` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-magnifying-glass?s=sharp-light nfc-magnifying-glass}
 * @preview ![nfc-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/nfc-magnifying-glass.svg)
 */
const NfcMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 64L32 64l0 384 320 0c26.7 20.1 60 32 96 32l-32 0L32 480 0 480l0-32L0 64 0 32l32 0 384 0 32 0 0 32 0 96c-11 0-21.7 1.1-32 3.2L416 64zm-32 48l0 61.3c-11.4 5-22.2 11.3-32 18.7l0-64-112 0 0 82.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-98.7 0-16 16 0 144 0 16 0 0 16zM320 416L80 416l-16 0 0-16 0-288 0-16 16 0 64 0 16 0 0 32-16 0-48 0 0 256 205.3 0c5 11.4 11.3 22.2 18.7 32zM224 240a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM448 416.2a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0 32c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 29.6-10 56.8-26.9 78.5l78.1 77.7 11.3 11.3-22.6 22.7L604.7 499l-78.2-77.8c-21.7 16.9-48.9 26.9-78.5 26.9z" />
    </Icon>
);

export default NfcMagnifyingGlass;