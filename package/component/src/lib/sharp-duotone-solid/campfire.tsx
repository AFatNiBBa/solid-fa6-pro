
import { Icon, generic } from "../../index";

/**
 * A component that renders the `campfire` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/campfire?s=sharp-duotone-solid campfire}
 * @preview ![campfire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/campfire.svg)
 */
const Campfire: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 174.5C112 93.1 189.6 24.2 228.4 0l58.2 58.2 29.1-29.1c69.8 58.2 87.3 121.2 87.3 145.5c0 80.3-65.1 145.5-145.5 145.5S112 254.9 112 174.5zm87.3 43.8c0 32.1 26 58.2 58.2 58.2s58.2-26 58.2-58.2c0-43.6-58.2-87.3-58.2-87.3s-58.2 43.6-58.2 87.3z" />
        <path d="M256 366.5l214.4-67.4 19.2 61.1L362.7 400l126.9 39.9-19.2 61.1L256 433.5 41.6 500.9 22.4 439.9 149.3 400 22.4 360.1l19.2-61.1L256 366.5z" />
    </Icon>
);

export default Campfire;