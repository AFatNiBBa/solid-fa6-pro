
import { Icon } from "../../index";

/**
 * A component that renders the `ethernet` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ethernet?s=regular ethernet}
 * @preview ![ethernet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ethernet.svg)
 */
const Ethernet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 32 32 0c17.7 0 32 14.3 32 32l0 32 32 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-80 0-96 0-96 0-96 0-80 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32l32 0 0-32c0-17.7 14.3-32 32-32l32 0 0-32zm48 16l0 40c0 13.3-10.7 24-24 24l-40 0 0 40c0 13.3-10.7 24-24 24l-40 0 0 160 40 0 0-56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 56 48 0 0-56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 56 48 0 0-56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 56 48 0 0-56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 56 40 0 0-160-40 0c-13.3 0-24-10.7-24-24l0-40-40 0c-13.3 0-24-10.7-24-24l0-40-160 0z" />
    </Icon>
);

export default Ethernet;