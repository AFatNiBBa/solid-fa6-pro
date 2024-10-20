
import { Icon } from "../../index";

/**
 * A component that renders the `bitcoin-sign` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bitcoin-sign?s=solid bitcoin-sign}
 * @preview ![bitcoin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bitcoin-sign.svg)
 */
const BitcoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 32C48 14.3 62.3 0 80 0s32 14.3 32 32l0 32 32 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32c0 1.5-.1 3.1-.3 4.5C254.1 82.2 288 125.1 288 176c0 24.2-7.7 46.6-20.7 64.9c31.7 19.8 52.7 55 52.7 95.1c0 61.9-50.1 112-112 112l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-6.3 0C18.7 448 0 429.3 0 406.3L0 288l0-22.3L0 224 0 101.6C0 80.8 16.8 64 37.6 64L48 64l0-32zM64 224l112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L64 128l0 96zm112 64L64 288l0 96 144 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z" />
    </Icon>
);

export default BitcoinSign;