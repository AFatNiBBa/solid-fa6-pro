
import { Icon } from "../../index";

/**
 * A component that renders the `campfire` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/campfire?s=sharp-solid campfire}
 * @preview ![campfire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/campfire.svg)
 */
const Campfire: typeof Icon = x => (
    <Icon {...x}>
        <path d="M228.4 0C189.6 24.2 112 93.1 112 174.5C112 254.9 177.1 320 257.5 320s145.5-65.1 145.5-145.5c0-24.2-17.5-87.3-87.3-145.5L286.5 58.2 228.4 0zm87.3 218.3c0 32.1-26 58.2-58.2 58.2s-58.2-26-58.2-58.2c0-43.6 58.2-87.3 58.2-87.3s58.2 43.6 58.2 87.3zm154.8 80.8L256 366.5 41.6 299.1 22.4 360.1 149.3 400 22.4 439.9l19.2 61.1L256 433.5l214.4 67.4 19.2-61.1L362.7 400l126.9-39.9-19.2-61.1z" />
    </Icon>
);

export default Campfire;