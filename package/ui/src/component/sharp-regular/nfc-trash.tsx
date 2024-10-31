
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-trash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-trash?s=sharp-regular nfc-trash}
 * @preview ![nfc-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/nfc-trash.svg)
 */
const NfcTrash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M400 80L48 80l0 352 330.2 0 3.4 48L48 480 0 480l0-48L0 80 0 32l48 0 352 0 48 0 0 48 0 80-13.7 0-16 32L400 192l0-112zM352 192l0 96 15.9 0 .1 1.1 0 86.9 0 24-24 0-240 0-24 0 0-24 0-240 0-24 24 0 32 0 24 0 0 48-24 0-8 0 0 192 192 0 0-192-72 0 0 54.4c14.3 8.3 24 23.8 24 41.6c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-17.8 9.7-33.3 24-41.6l0-78.4 0-24 24 0 120 0 24 0 0 24 0 56-16 0zm102.1 0l9.9 0 96 0 9.9 0 4.4 8.8L585.9 224l38.1 0 16 0 0 32-16 0-48 0-128 0-48 0-16 0 0-32 16 0 38.1 0 11.6-23.2 4.4-8.8zM608 512l-192 0L400 288l224 0L608 512z" />
    </Icon>
);

export default NfcTrash;