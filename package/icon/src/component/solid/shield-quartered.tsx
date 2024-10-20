
import { Icon } from "../../index";

/**
 * A component that renders the `shield-quartered` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-quartered?s=solid shield-quartered}
 * @preview ![shield-quartered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/shield-quartered.svg)
 */
const ShieldQuartered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM80 141.4L256 66.8 256 224 90.1 224c-6.9-30-9.8-58.5-10.1-82.6zM256 444.8L256 224l166 0c-18.5 80.5-65.5 172.2-166 220.8z" />
    </Icon>
);

export default ShieldQuartered;