
import { Icon } from "../../index";

/**
 * A component that renders the `shield-plus` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-plus?s=solid shield-plus}
 * @preview ![shield-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/shield-plus.svg)
 */
const ShieldPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
    </Icon>
);

export default ShieldPlus;