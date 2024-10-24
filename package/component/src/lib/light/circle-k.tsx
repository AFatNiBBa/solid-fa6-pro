
import { Icon } from "../../index";

/**
 * A component that renders the `circle-k` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-k?s=light circle-k}
 * @preview ![circle-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-k.svg)
 */
const CircleK: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm91.1-356.5c6.4-6.1 6.5-16.3 .4-22.6s-16.3-6.5-22.6-.4L192 260.8 192 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 154.5 0 69.5c0 8.8 7.2 16 16 16s16-7.2 16-16l0-62.7 44.6-43.1 86.6 115.4c5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4l-89-118.6 87.3-84.3z" />
    </Icon>
);

export default CircleK;