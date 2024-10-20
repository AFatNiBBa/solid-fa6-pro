
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-symbol` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-symbol?s=light nfc-symbol}
 * @preview ![nfc-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/nfc-symbol.svg)
 */
const NfcSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M367.2 475.6c5.1 4.9 12.9 5.8 19 2.2C462.2 433.9 513.1 349.8 513.1 256s-50.9-177.9-126.8-221.8c-7.6-4.4-17.4-1.8-21.9 5.8s-1.8 17.4 5.8 21.9C436.4 100.1 481.1 173.8 481.1 256c0 78-40.2 148.2-100.8 187.9L203 276.4c-6.4-6.1-16.5-5.8-22.6 .6s-5.8 16.5 .6 22.6l186.2 176zM145.9 36.4c-5.1-4.9-12.9-5.8-19-2.3C50.9 78.1 0 162.2 0 256s50.9 177.9 126.8 221.8c7.6 4.4 17.4 1.8 21.9-5.8s1.8-17.4-5.8-21.9C76.7 411.9 32 338.2 32 256c0-77.9 40.2-148.2 100.8-187.9L309 235.6c6.4 6.1 16.5 5.8 22.6-.6s5.8-16.5-.6-22.6L145.9 36.4z" />
    </Icon>
);

export default NfcSymbol;