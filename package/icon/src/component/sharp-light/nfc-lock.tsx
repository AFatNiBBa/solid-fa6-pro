
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-lock?s=sharp-light nfc-lock}
 * @preview ![nfc-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/nfc-lock.svg)
 */
const NfcLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 64L32 64l0 384 288 0 0 32L32 480 0 480l0-32L0 64 0 32l32 0 384 0 32 0 0 32 0 97.1c-11.3 1.6-22.1 4.9-32 9.6L416 64zm-32 48l0 81.6c-19.8 20.2-32 47.9-32 78.4l0-144-112 0 0 82.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-98.7 0-16 16 0 144 0 16 0 0 16zM96 384l224 0 0 32L80 416l-16 0 0-16 0-288 0-16 16 0 64 0 16 0 0 32-16 0-48 0 0 256zM224 240a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm240-16c-26.5 0-48 21.5-48 48l0 48 96 0 0-48c0-26.5-21.5-48-48-48zm-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 32 0 128 0 32-32 0-160 0-32 0 0-32 0-128 0-32 32 0 0-48zm160 80l-160 0 0 128 160 0 0-128z" />
    </Icon>
);

export default NfcLock;