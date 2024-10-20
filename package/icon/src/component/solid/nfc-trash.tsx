
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-trash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-trash?s=solid nfc-trash}
 * @preview ![nfc-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/nfc-trash.svg)
 */
const NfcTrash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 66.7c-11.5 4.1-21.3 12.5-26.9 23.8l-2.7 5.5L400 192c-5.6 0-11 1-16 2.7l0-50.7c0-26.5-21.5-48-48-48l-80 0c-26.5 0-48 21.5-48 48l0 66.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-66.7c0-8.8 7.2-16 16-16l80 0c8.8 0 16 7.2 16 16l0 96 0 128c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-26.5 0-48 21.5-48 48l0 224c0 26.5 21.5 48 48 48l224 0c16.4 0 30.9-8.2 39.6-20.8l6.1 84.8L64 480c-35.3 0-64-28.7-64-64L0 96zM449.7 200.8c2.7-5.4 8.2-8.8 14.3-8.8l96 0c6.1 0 11.6 3.4 14.3 8.8L585.9 224l38.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0-128 0-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l38.1 0 11.6-23.2zM413.9 482.3L400 288l224 0L610.1 482.3C608.9 499 595 512 578.2 512l-132.4 0c-16.8 0-30.7-13-31.9-29.7z" />
    </Icon>
);

export default NfcTrash;