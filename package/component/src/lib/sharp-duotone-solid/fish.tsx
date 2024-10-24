
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fish` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish?s=sharp-duotone-solid fish}
 * @preview ![fish](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fish.svg)
 */
const Fish: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l48 96L0 352l32 32 110.8-55.4C182.2 377.1 246.6 432 336 432c160 0 240-176 240-176s-80-176-240-176c-89.4 0-153.8 54.9-193.2 103.4L32 128 0 160zm448 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M416 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default Fish;