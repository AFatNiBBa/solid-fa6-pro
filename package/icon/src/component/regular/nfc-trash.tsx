
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-trash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-trash?s=regular nfc-trash}
 * @preview ![nfc-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/nfc-trash.svg)
 */
const NfcTrash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 80L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l314.2 0 3.4 48L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 66.7c-11.5 4.1-21.3 12.5-26.9 23.8l-2.7 5.5L400 192l0-96c0-8.8-7.2-16-16-16zM352 240c0 13.7 5.8 26.1 15 34.8l1 14.3 0 70.9c0 22.1-17.9 40-40 40l-208 0c-22.1 0-40-17.9-40-40l0-208c0-22.1 17.9-40 40-40l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 192 192 0 0-192-72 0 0 54.4c14.3 8.3 24 23.8 24 41.6c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-17.8 9.7-33.3 24-41.6l0-62.4c0-22.1 17.9-40 40-40l88 0c22.1 0 40 17.9 40 40l0 52.2c-9.8 8.8-16 21.6-16 35.8zm97.7-39.2c2.7-5.4 8.2-8.8 14.3-8.8l96 0c6.1 0 11.6 3.4 14.3 8.8L585.9 224l38.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0-128 0-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l38.1 0 11.6-23.2zM413.9 482.3L400 288l224 0L610.1 482.3C608.9 499 595 512 578.2 512l-132.4 0c-16.8 0-30.7-13-31.9-29.7z" />
    </Icon>
);

export default NfcTrash;