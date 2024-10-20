
import { Icon } from "../../index";

/**
 * A component that renders the `shield-quartered` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-quartered?s=light shield-quartered}
 * @preview ![shield-quartered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shield-quartered.svg)
 */
const ShieldQuartered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M66.8 112.3C55.5 117 47.9 127.7 48 139.8c.1 20 1.9 43.2 6.3 68.2L240 208l0-169.2L66.8 112.3zM61.1 240C82.3 324.6 133.3 420.1 240 472.6L240 240 61.1 240zM272 240l0 232.6c106.7-52.5 157.7-148 179-232.6l-179 0zm185.8-32c4.3-24.9 6.2-48.2 6.3-68.2c.1-12.1-7.5-22.8-18.8-27.6L272 38.8 272 208l185.8 0zM231 7.8c16-6.8 34-6.8 50 0l176.7 75c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L231 7.8z" />
    </Icon>
);

export default ShieldQuartered;