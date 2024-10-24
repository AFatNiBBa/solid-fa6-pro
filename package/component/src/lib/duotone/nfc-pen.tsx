
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-pen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-pen?s=duotone nfc-pen}
 * @preview ![nfc-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/nfc-pen.svg)
 */
const NfcPen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l194.5 0 14-55.9c.7-2.8 1.6-5.5 2.6-8.1L112 416c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16l187.6 0L352 331.6 352 144c0-8.8-7.2-16-16-16l-80 0c-8.8 0-16 7.2-16 16l0 66.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-66.7c0-26.5 21.5-48 48-48l80 0c26.5 0 48 21.5 48 48l0 155.6 64-64L448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96z" />
        <path d="M493.2 235.7l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4c-15.6-15.6-40.9-15.6-56.6 0zm-52 52L311.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L512.1 358.7l-71-71z" />
    </Icon>
);

export default NfcPen;