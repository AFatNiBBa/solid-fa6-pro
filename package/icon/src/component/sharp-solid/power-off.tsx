
import { Icon } from "../../index";

/**
 * A component that renders the `power-off` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/power-off?s=sharp-solid power-off}
 * @preview ![power-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/power-off.svg)
 */
const PowerOff: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0-32L224 0l0 32 0 224 0 32 64 0 0-32 0-224zM80 256c0-54.4 24.7-103.1 63.5-135.4L102.6 71.4C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6l-40.9 49.2c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176z" />
    </Icon>
);

export default PowerOff;