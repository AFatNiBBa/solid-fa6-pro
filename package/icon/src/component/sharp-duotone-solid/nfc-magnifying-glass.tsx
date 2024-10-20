
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-magnifying-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-magnifying-glass?s=sharp-duotone-solid nfc-magnifying-glass}
 * @preview ![nfc-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/nfc-magnifying-glass.svg)
 */
const NfcMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0c-52.3 0-98.8-25.1-128-64L80 416l-16 0 0-16 0-288 0-16 16 0 64 0 16 0 0 32-16 0-48 0 0 256 205.3 0c-8.6-19.6-13.3-41.2-13.3-64c0-52.3 25.1-98.8 64-128l0-64-112 0 0 82.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-98.7 0-16 16 0 144 0 16 0 0 16 0 61.3c19.6-8.6 41.2-13.3 64-13.3l0-128L0 32z" />
        <path d="M528 320.1a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM520 426c-20.5 14-45.3 22.1-72 22.1c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9l63 62.6 17 16.9-33.8 34-17-16.9L520 426z" />
    </Icon>
);

export default NfcMagnifyingGlass;