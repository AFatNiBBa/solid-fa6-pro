
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-symbol` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-symbol?s=duotone nfc-symbol}
 * @preview ![nfc-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/nfc-symbol.svg)
 */
const NfcSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 288c0 8.8 3.6 17.5 10.6 23.8l178.3 160c6 5.4 13.7 8.2 21.4 8.2c5.5 0 11-1.4 16-4.3C461.6 432.1 512 348.8 512 256s-50.3-176.1-125.7-219.7c-5-2.9-10.6-4.3-16-4.3c-11.1 0-21.8 5.7-27.7 16c-8.8 15.3-3.6 34.9 11.7 43.7C410.1 124 448 186.4 448 256c0 61.4-29.5 117.2-74.8 151.7L213.4 264.2c-13.2-11.8-33.4-10.7-45.2 2.4c-5.5 6.1-8.2 13.8-8.2 21.4z" />
        <path d="M125.7 36.3c12-6.9 27.1-5.4 37.4 3.9l178.3 160c13.2 11.8 14.2 32 2.4 45.2s-32 14.2-45.2 2.4L138.8 104.4C93.5 138.8 64 194.6 64 256c0 69.6 37.9 132 93.7 164.3c15.3 8.8 20.5 28.4 11.7 43.7s-28.4 20.5-43.7 11.7C50.3 432.1 0 348.8 0 256S50.3 79.9 125.7 36.3z" />
    </Icon>
);

export default NfcSymbol;