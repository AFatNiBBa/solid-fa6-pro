
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-symbol` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-symbol?s=solid nfc-symbol}
 * @preview ![nfc-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/nfc-symbol.svg)
 */
const NfcSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M348.9 471.8c10.3 9.3 25.4 10.8 37.4 3.9C461.6 432.1 512 348.8 512 256s-50.3-176.1-125.7-219.7C371 27.5 351.4 32.7 342.6 48s-3.6 34.9 11.7 43.7C410.1 124 448 186.4 448 256c0 61.4-29.5 117.2-74.8 151.7L213.4 264.2c-13.2-11.8-33.4-10.7-45.2 2.4s-10.7 33.4 2.4 45.2l178.3 160zM163.1 40.2c-10.3-9.3-25.4-10.8-37.4-3.9C50.3 79.9 0 163.2 0 256s50.3 176.1 125.7 219.7c15.3 8.8 34.9 3.6 43.7-11.7s3.6-34.9-11.7-43.7C101.9 388 64 325.7 64 256c0-61.4 29.5-117.2 74.8-151.7L298.6 247.8c13.2 11.8 33.4 10.7 45.2-2.4s10.7-33.4-2.4-45.2L163.1 40.2z" />
    </Icon>
);

export default NfcSymbol;