
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-signal` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-signal?s=sharp-thin nfc-signal}
 * @preview ![nfc-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/nfc-signal.svg)
 */
const NfcSignal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 48L16 48l0 416 212 0c-.9 5.3-1.6 10.6-2.2 16L16 480 0 480l0-16L0 48 0 32l16 0 416 0 16 0 0 16 0 183.1c-5.4 1.2-10.7 2.6-16 4.1L432 48zm-64 72l0 142.5c-5.4 3.2-10.8 6.5-16 10L352 128l-120 0 0 88.8c18.3 3.7 32 19.8 32 39.2c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-19.4 13.7-35.5 32-39.2l0-96.8 0-8 8 0 136 0 8 0 0 8zM246.6 400L88 400l-8 0 0-8 0-272 0-8 8 0 64 0 8 0 0 16-8 0-56 0 0 256 157.9 0c-2.6 5.2-5.1 10.6-7.3 16zM224 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm288 40c-132.5 0-240 107.5-240 240l-16 0c0-141.4 114.6-256 256-256l0 16zM464 480a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm48 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM368 512l-16 0c0-88.4 71.6-160 160-160l0 16c-79.5 0-144 64.5-144 144z" />
    </Icon>
);

export default NfcSignal;