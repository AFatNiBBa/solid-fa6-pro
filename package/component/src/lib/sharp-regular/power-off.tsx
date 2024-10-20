
import { Icon } from "../../index";

/**
 * A component that renders the `power-off` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/power-off?s=sharp-regular power-off}
 * @preview ![power-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/power-off.svg)
 */
const PowerOff: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 24l0-24L232 0l0 24 0 240 0 24 48 0 0-24 0-240zM56 262c0-63.4 30.7-119.7 78.2-154.7L105.8 68.7C46.5 112.3 8 182.7 8 262C8 394.6 115.5 502 248 502s240-107.5 240-240c0-79.3-38.5-149.7-97.8-193.3l-28.5 38.6c47.5 35 78.2 91.2 78.2 154.7c0 106-86 192-192 192S56 368 56 262z" />
    </Icon>
);

export default PowerOff;