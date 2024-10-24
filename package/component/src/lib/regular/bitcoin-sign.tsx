
import { Icon } from "../../index";

/**
 * A component that renders the `bitcoin-sign` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bitcoin-sign?s=regular bitcoin-sign}
 * @preview ![bitcoin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bitcoin-sign.svg)
 */
const BitcoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 24C64 10.7 74.7 0 88 0s24 10.7 24 24l0 40 32 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40.7c54 6 96 51.8 96 107.3c0 27.5-10.3 52.6-27.2 71.6C295.9 261.5 320 297.9 320 340c0 59.6-48.4 108-108 108l-20 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-32 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-22.3 0C18.7 448 0 429.3 0 406.3L0 280l0-6.3L0 232 0 101.6C0 80.8 16.8 64 37.6 64L64 64l0-40zM48 232l132 0c33.1 0 60-26.9 60-60s-26.9-60-60-60L48 112l0 120zm132 48L48 280l0 120 164 0c33.1 0 60-26.9 60-60s-26.9-60-60-60l-32 0z" />
    </Icon>
);

export default BitcoinSign;