
import { Icon } from "../../index";

/**
 * A component that renders the `bitcoin-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bitcoin-sign?s=sharp-light bitcoin-sign}
 * @preview ![bitcoin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bitcoin-sign.svg)
 */
const BitcoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 0L96 0l0 64 64 0 0-64 32 0 0 64.3c53.7 4.1 96 49 96 103.7c0 31.3-13.9 59.4-35.8 78.5C291.8 261.2 320 299.3 320 344c0 57.4-46.6 104-104 104l-24 0 0 64-32 0 0-64-64 0 0 64-32 0 0-64-32 0L0 448l0-32L0 272l0-32L0 96 0 64l32 0 32 0L64 0zm96 416l32 0 24 0c39.8 0 72-32.2 72-72s-32.2-72-72-72l-32 0L32 272l0 144 32 0 32 0 64 0zM184 96l-24 0L96 96 64 96 32 96l0 144 152 0c39.8 0 72-32.2 72-72s-32.2-72-72-72z" />
    </Icon>
);

export default BitcoinSign;