
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-trash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-trash?s=sharp-thin nfc-trash}
 * @preview ![nfc-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/nfc-trash.svg)
 */
const NfcTrash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M432 48L16 48l0 416 364.5 0 1.1 16L16 480 0 480l0-16L0 48 0 32l16 0 416 0 16 0 0 16 0 112-8.7 0L432 174.6 432 48zm-64 72l0 88-16 0 0-80-120 0 0 88.8c18.3 3.7 32 19.8 32 39.2c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-19.4 13.7-35.5 32-39.2l0-96.8 0-8 8 0 136 0 8 0 0 8zM352 384l0-96 15.9 0 .1 1.1L368 392l0 8-8 0L88 400l-8 0 0-8 0-272 0-8 8 0 64 0 8 0 0 16-8 0-56 0 0 256 256 0zM224 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm235.1-39.9l4.9 0 96 0 4.9 0 2.2 4.4 21.8 43.6 43.1 0 8 0 0 16-8 0-48 0-144 0-48 0-8 0 0-16 8 0 43.1 0 21.8-43.6 2.2-4.4zm-6.1 48l118.1 0-16-32-86.1 0-16 32zM400 288.2l16 0 14.9 207.9 162.2 0L608 288.2l16 0L608 512.1l-192 0L400 288.2z" />
    </Icon>
);

export default NfcTrash;