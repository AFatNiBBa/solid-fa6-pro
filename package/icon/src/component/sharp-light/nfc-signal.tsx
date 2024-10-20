
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-signal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-signal?s=sharp-light nfc-signal}
 * @preview ![nfc-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/nfc-signal.svg)
 */
const NfcSignal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 64L32 64l0 384 199.1 0c-2.4 10.5-4.2 21.1-5.4 32L32 480 0 480l0-32L0 64 0 32l32 0 384 0 32 0 0 32 0 167.1c-10.9 2.5-21.6 5.6-32 9.3L416 64zm-32 48l0 141.9c-11.1 5.5-21.8 11.7-32 18.6L352 128l-112 0 0 82.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-98.7 0-16 16 0 144 0 16 0 0 16zM240.4 416L80 416l-16 0 0-16 0-288 0-16 16 0 64 0 16 0 0 32-16 0-48 0 0 256 157.9 0c-5.1 10.3-9.7 21-13.5 32zM224 240a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm288 48c-123.7 0-224 100.3-224 224l-32 0c0-141.4 114.6-256 256-256l0 32zM480 448a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-96 64l-32 0c0-88.4 71.6-160 160-160l0 32c-70.7 0-128 57.3-128 128z" />
    </Icon>
);

export default NfcSignal;