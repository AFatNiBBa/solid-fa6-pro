
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-lock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-lock?s=light nfc-lock}
 * @preview ![nfc-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/nfc-lock.svg)
 */
const NfcLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 64L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l256 0 0 32L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 65.1c-11.3 1.6-22.1 4.9-32 9.6L416 96c0-17.7-14.3-32-32-32zm0 64l0 65.6c-19.8 20.2-32 47.9-32 78.4l0-144-112 0 0 82.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-82.7c0-17.7 14.3-32 32-32l112 0c17.7 0 32 14.3 32 32zM96 384l224 0 0 32L96 416c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 256zM224 240a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm240-16c-26.5 0-48 21.5-48 48l0 48 96 0 0-48c0-26.5-21.5-48-48-48zm-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l0-48zm160 80l-160 0 0 128 160 0 0-128z" />
    </Icon>
);

export default NfcLock;