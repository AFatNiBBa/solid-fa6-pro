
import { Icon } from "../../index";

/**
 * A component that renders the `skull` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull?s=sharp-solid skull}
 * @preview ![skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/skull.svg)
 */
const Skull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 398.9c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9L96 512l96 0 0-48 0-16 32 0 0 16 0 48 64 0 0-48 0-16 32 0 0 16 0 48 96 0 0-113.1zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Skull;