
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-lock?s=sharp-thin nfc-lock}
 * @preview ![nfc-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/nfc-lock.svg)
 */
const NfcLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M432 48L16 48l0 416 304 0 0 16L16 480 0 480l0-16L0 48 0 32l16 0 416 0 16 0 0 16 0 113.3c-5.5 .9-10.9 2.3-16 4.1L432 48zM368 256l0 32-16 0 0-160-120 0 0 88.8c18.3 3.7 32 19.8 32 39.2c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-19.4 13.7-35.5 32-39.2l0-96.8 0-8 8 0 136 0 8 0 0 8 0 136zM320 400L88 400l-8 0 0-8 0-272 0-8 8 0 64 0 8 0 0 16-8 0-56 0 0 256 224 0 0 16zM224 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm240-24c-26.5 0-48 21.5-48 48l0 64 96 0 0-64c0-26.5-21.5-48-48-48zm-64 48c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 32 0 16 0 0 16 0 160 0 16-16 0-192 0-16 0 0-16 0-160 0-16 16 0 32 0 0-64zm-32 80l0 160 192 0 0-160-32 0-16 0-96 0-16 0-32 0z" />
    </Icon>
);

export default NfcLock;