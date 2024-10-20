
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-trash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-trash?s=sharp-light nfc-trash}
 * @preview ![nfc-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/nfc-trash.svg)
 */
const NfcTrash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 64l384 0 0 136.2L429.4 160l18.6 0 0-96 0-32-32 0L32 32 0 32 0 64 0 448l0 32 32 0 349.6 0-2.3-32L32 448 32 64zm352 48l0-16-16 0L224 96l-16 0 0 16 0 98.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-82.7 112 0 0 80 32 0 0-96zm-6.9 304l-8-112L352 304l0 80L96 384l0-256 48 0 16 0 0-32-16 0L80 96 64 96l0 16 0 288 0 16 16 0 288 0 9.1 0zM240 256a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm212.5-64l-3.6 10.9L436.5 240 400 240l-16 0 0 32 16 0 48 0 128 0 48 0 16 0 0-32-16 0-36.5 0-12.4-37.1L571.5 192 560 192l-96 0-11.5 0zm17.7 48l5.3-16 72.9 0 5.3 16-83.6 0zm-69 64.1L416 512l192 0 14.9-207.9-32.1 0L578.2 480l-132.4 0L433.2 304.1l-32.1 0z" />
    </Icon>
);

export default NfcTrash;