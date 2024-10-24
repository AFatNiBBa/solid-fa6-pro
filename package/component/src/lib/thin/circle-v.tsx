
import { Icon } from "../../index";

/**
 * A component that renders the `circle-v` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-v?s=thin circle-v}
 * @preview ![circle-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-v.svg)
 */
const CircleV: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM143.2 148.4c-2-4-6.8-5.6-10.7-3.6s-5.6 6.8-3.6 10.7l120 240c1.4 2.7 4.1 4.4 7.2 4.4s5.8-1.7 7.2-4.4l120-240c2-4 .4-8.8-3.6-10.7s-8.8-.4-10.7 3.6L256 374.1 143.2 148.4z" />
    </Icon>
);

export default CircleV;