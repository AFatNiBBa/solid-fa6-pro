
import { Icon } from "../../index";

/**
 * A component that renders the `house-tree` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-tree?s=sharp-light house-tree}
 * @preview ![house-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/house-tree.svg)
 */
const HouseTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 2l11 10.4 144 136 5 4.7 0 6.9 0 16 0 16-16 0-46.3 0 90.7 111 3.6 4.4 0 5.7 0 22.9 0 16-16 0-59.7 0L635.8 465.2l4.2 4.6 0 6.2 0 20 0 16-16 0-208 0 0-32 190 0L496 359.7l0-39.7 80 0 0-1.2L480 201.3l0-41.3 56.7 0L416 46 310.7 145.4l-23.7-21.7L405 12.4 416 2zM384 480l0 32-32 0L32 512 0 512l0-32L0 256 192 96 384 256l0 192 0 32zM32 480l320 0 0-209L192 137.7 32 271l0 209zM160 352l64 0 0-64-64 0 0 64zm-32-96l32 0 64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32z" />
    </Icon>
);

export default HouseTree;