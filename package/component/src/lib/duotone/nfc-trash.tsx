
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-trash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-trash?s=duotone nfc-trash}
 * @preview ![nfc-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/nfc-trash.svg)
 */
const NfcTrash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l317.6 0-6.1-84.8C366.9 407.8 352.4 416 336 416l-224 0c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-128 0-96c0-8.8-7.2-16-16-16l-80 0c-8.8 0-16 7.2-16 16l0 66.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-66.7c0-26.5 21.5-48 48-48l80 0c26.5 0 48 21.5 48 48l0 50.7c5-1.8 10.4-2.7 16-2.7l18.3 0 2.7-5.5c5.7-11.3 15.4-19.7 26.9-23.8L448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96z" />
        <path d="M464 192c-6.1 0-11.6 3.4-14.3 8.8L438.1 224 400 224c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 128 0 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-38.1 0-11.6-23.2c-2.7-5.4-8.2-8.8-14.3-8.8l-96 0zm-64 96l13.9 194.3C415.1 499 429 512 445.8 512l132.4 0c16.8 0 30.7-13 31.9-29.7L624 288l-224 0z" />
    </Icon>
);

export default NfcTrash;