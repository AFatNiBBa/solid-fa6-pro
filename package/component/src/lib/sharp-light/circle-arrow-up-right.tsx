
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-right?s=sharp-light circle-arrow-up-right}
 * @preview ![circle-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-arrow-up-right.svg)
 */
const CircleArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm80 160l16 0 0 16 0 144 0 16-32 0 0-16 0-105.4L187.3 347.3 176 358.6 153.4 336l11.3-11.3L297.4 192 200 192l-16 0 0-32 16 0 136 0z" />
    </Icon>
);

export default CircleArrowUpRight;