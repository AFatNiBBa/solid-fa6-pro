
import { Icon } from "../../index";

/**
 * A component that renders the `shield-quartered` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-quartered?s=regular shield-quartered}
 * @preview ![shield-quartered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shield-quartered.svg)
 */
const ShieldQuartered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M73 127c-5.9 2.5-9.1 7.8-9 12.8c.1 17.9 1.6 38.4 5.1 60.3L232 200l0-140.4L73 127zm6.7 121c20.9 73.9 65.9 153.7 152.3 202.3L232 248 79.7 248zM280 248l0 202.4C366.4 401.8 411.4 322 432.3 248L280 248zm162.9-48c3.5-21.9 5-42.3 5.1-60.3c0-5-3.1-10.2-9-12.8L280 59.6 280 200l162.9 0zM269.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0s9.2 1 13.4 2.9z" />
    </Icon>
);

export default ShieldQuartered;