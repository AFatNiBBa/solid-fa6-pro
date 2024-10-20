
import { Icon } from "../../index";

/**
 * A component that renders the `shield-halved` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-halved?s=regular shield-halved}
 * @preview ![shield-halved](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shield-halved.svg)
 */
const ShieldHalved: typeof Icon = x => (
    <Icon {...x}>
        <path d="M232 59.6l0 390.7C99.2 375.7 64.4 227.3 64 139.7c0-5 3.1-10.2 9-12.8L232 59.6zm48 390.8l0-390.8L439 127c5.9 2.5 9.1 7.8 9 12.8c-.4 87.5-35.2 236-168 310.6zM457.7 82.8L269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.8 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2z" />
    </Icon>
);

export default ShieldHalved;