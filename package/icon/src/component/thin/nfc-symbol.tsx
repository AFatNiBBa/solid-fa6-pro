
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-symbol` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-symbol?s=thin nfc-symbol}
 * @preview ![nfc-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/nfc-symbol.svg)
 */
const NfcSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M137.8 34.3c-2.6-2.5-6.5-3-9.6-1.2C51.5 77.1 0 161.7 0 256s51.5 178.9 128.3 222.9c3.8 2.2 8.7 .9 10.9-3s.9-8.7-3-10.9C64.4 423.8 16 344.5 16 256C16 169.7 62.1 92.1 131 50L314.4 229.7c3.2 3.1 8.2 3 11.3-.1s3-8.2-.1-11.3L137.8 34.3zm239 443.5c2.6 2.5 6.5 3 9.6 1.2C461.9 434.8 512.5 350.2 512.5 256s-50.6-178.8-126.1-222.9c-3.8-2.2-8.7-.9-10.9 2.9s-.9 8.7 2.9 10.9C448.9 88.2 496.5 167.5 496.5 256c0 86.3-45.3 163.9-113 206l-186-179.7c-3.2-3.1-8.2-3-11.3 .2s-3 8.2 .2 11.3l190.4 184z" />
    </Icon>
);

export default NfcSymbol;