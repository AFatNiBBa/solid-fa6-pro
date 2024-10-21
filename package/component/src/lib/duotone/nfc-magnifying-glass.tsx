
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-magnifying-glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-magnifying-glass?s=duotone nfc-magnifying-glass}
 * @preview ![nfc-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/nfc-magnifying-glass.svg)
 */
const NfcMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c8.7 0 17-1.7 24.6-4.9c-35.9-9.1-67-30.3-88.6-59.1l-208 0c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16l189.3 0c-8.6-19.6-13.3-41.2-13.3-64c0-52.3 25.1-98.8 64-128l0-48c0-8.8-7.2-16-16-16l-80 0c-8.8 0-16 7.2-16 16l0 66.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-66.7c0-26.5 21.5-48 48-48l80 0c26.5 0 48 21.5 48 48l0 29.3c19.6-8.6 41.2-13.3 64-13.3l0-64c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96z" />
        <path d="M528 320.1a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM519.9 426c-20.5 14-45.3 22.1-71.9 22.1c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9L633 471.2c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L519.9 426z" />
    </Icon>
);

export default NfcMagnifyingGlass;