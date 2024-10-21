
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc?s=duotone nfc}
 * @preview ![nfc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/nfc.svg)
 */
const Nfc: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 144l0 224c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-224c0-8.8-7.2-16-16-16l-80 0c-8.8 0-16 7.2-16 16l0 66.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-66.7c0-5.6 1-11 2.7-16L144 128l-32 0c-8.8 0-16 7.2-16 16z" />
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm48 64l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l66.7 0c6.6-18.6 24.4-32 45.3-32l80 0c26.5 0 48 21.5 48 48l0 224c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default Nfc;