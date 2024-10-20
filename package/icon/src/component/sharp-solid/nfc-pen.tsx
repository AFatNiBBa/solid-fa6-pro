
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-pen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-pen?s=sharp-solid nfc-pen}
 * @preview ![nfc-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/nfc-pen.svg)
 */
const NfcPen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 32l448 0 0 204.4-64 64L384 112l0-16-16 0L224 96l-16 0 0 16 0 98.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-82.7 112 0 0 204.4L300.4 384 96 384l0-256 48 0 16 0 0-32-16 0L80 96 64 96l0 16 0 288 0 16 16 0 188.4 0-1.4 1.4L258 480 0 480 0 32zM505 223.8l71 71-41.3 41.3-71-71L505 223.8zm-63.9 63.9l71 71L370.9 500 288 511.9 299.9 429 441.1 287.8z" />
    </Icon>
);

export default NfcPen;