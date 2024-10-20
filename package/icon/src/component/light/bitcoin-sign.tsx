
import { Icon } from "../../index";

/**
 * A component that renders the `bitcoin-sign` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bitcoin-sign?s=light bitcoin-sign}
 * @preview ![bitcoin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bitcoin-sign.svg)
 */
const BitcoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 16C64 7.2 71.2 0 80 0s16 7.2 16 16l0 48 64 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48.3c53.7 4.1 96 49 96 103.7c0 31.3-13.9 59.4-35.8 78.5C291.8 261.2 320 299.3 320 344c0 57.4-46.6 104-104 104l-24 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-64 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-22.3 0C18.7 448 0 429.3 0 406.3L0 272l0-32L0 101.6C0 80.8 16.8 64 37.6 64L64 64l0-48zM176 416l40 0c39.8 0 72-32.2 72-72s-32.2-72-72-72l-32 0L32 272l0 134.3c0 5.4 4.4 9.7 9.7 9.7L80 416l96 0zm0-320L80 96 37.6 96c-3.1 0-5.6 2.5-5.6 5.6L32 240l152 0c39.8 0 72-32.2 72-72s-32.2-72-72-72l-8 0z" />
    </Icon>
);

export default BitcoinSign;