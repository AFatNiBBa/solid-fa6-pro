
import { Icon, generic } from "../../index";

/**
 * A component that renders the `moon-cloud` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-cloud?s=sharp-duotone-solid moon-cloud}
 * @preview ![moon-cloud](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/moon-cloud.svg)
 */
const MoonCloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M256.5 240.3C310 244.7 352 289.4 352 344l0 95.9c36.3 25.3 80.4 40.1 128 40.1c62.6 0 119.2-25.7 159.8-67c-15.5 4.1-31.8 6.2-48.6 6.2c-105.8 0-191.5-86-191.5-192c0-89.6 61.2-164.8 144-186c-20.2-6-41.5-9.2-63.6-9.2c-118.4 0-215.4 91.9-223.5 208.3z" />
        <path d="M248 416L64 416 0 416l0-64c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0c7.4-36.5 39.7-64 78.4-64c35 0 64.8 22.5 75.6 53.8c8.7-3.7 18.3-5.8 28.4-5.8c39.8 0 72 32.2 72 72l0 72-72 0z" />
    </Icon>
);

export default MoonCloud;