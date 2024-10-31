
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-signal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-signal?s=sharp-duotone-solid nfc-signal}
 * @preview ![nfc-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/nfc-signal.svg)
 */
const NfcSignal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l225.8 0c2.5-22.2 7.4-43.6 14.6-64L80 416l-16 0 0-16 0-288 0-16 16 0 64 0 16 0 0 32-16 0-48 0 0 256 157.9 0c22.5-45.2 56.4-83.6 98.1-111.5L352 128l-112 0 0 82.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-98.7 0-16 16 0 144 0 16 0 0 16 0 141.9c20.1-10 41.6-17.7 64-22.8L448 32 0 32z" />
        <path d="M304 512c0-114.9 93.1-208 208-208l0-48c-141.4 0-256 114.6-256 256l48 0zm144-32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-80l0-48c-88.4 0-160 71.6-160 160l48 0c0-61.9 50.1-112 112-112z" />
    </Icon>
);

export default NfcSignal;