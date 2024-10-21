
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-pen` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-pen?s=sharp-regular nfc-pen}
 * @preview ![nfc-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/nfc-pen.svg)
 */
const NfcPen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 80l352 0 0 204.4 48-48L448 80l0-48-48 0L48 32 0 32 0 80 0 432l0 48 48 0 210 0 6.9-48L48 432 48 80zM368 316.4L368 136l0-24-24 0-120 0-24 0 0 24 0 78.4c-14.3 8.3-24 23.8-24 41.6c0 26.5 21.5 48 48 48s48-21.5 48-48c0-17.8-9.7-33.3-24-41.6l0-54.4 72 0 0 192-192 0 0-192 8 0 24 0 0-48-24 0-32 0-24 0 0 24 0 240 0 24 24 0 180.4 0L368 316.4zm137-92.6l-41.3 41.3 71 71L576 294.8l-71-71zm-63.9 63.9L299.9 429 288 511.9 370.9 500 512.1 358.7l-71-71z" />
    </Icon>
);

export default NfcPen;