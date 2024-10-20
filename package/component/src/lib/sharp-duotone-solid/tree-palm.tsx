
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree-palm` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-palm?s=sharp-duotone-solid tree-palm}
 * @preview ![tree-palm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tree-palm.svg)
 */
const TreePalm: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M212.5 512l43.5 0 64 0 28.2 0 3.5-28c3-24 4.4-48.4 4.4-73c0-77-13.8-154.7-36.1-219l-56.7 0c-5 5-9.9 9.9-14.9 14.9c4 10.8 7.8 26.2 9.7 47.2c4.2 46.5-1.6 116.8-32.7 216.4l-13 41.5z" />
        <path d="M133.2 141.9L96 80 67.2 128 0 128C0 80 48 0 160 0c88 0 136.5 49.4 153.2 93.8C338.4 76.2 372.3 64 416 64c112 0 160 80 160 128l-67.2 0L480 144l-28.8 48-187.9 0L98.5 356.8c-33.9-33.9-56.6-124.5 22.6-203.6c4-4 8-7.7 12-11.2z" />
    </Icon>
);

export default TreePalm;