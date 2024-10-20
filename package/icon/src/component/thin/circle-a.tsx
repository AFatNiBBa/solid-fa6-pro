
import { Icon } from "../../index";

/**
 * A component that renders the `circle-a` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-a?s=thin circle-a}
 * @preview ![circle-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-a.svg)
 */
const CircleA: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-400c-3 0-5.8 1.7-7.2 4.4l-120 240c-2 4-.4 8.8 3.6 10.7s8.8 .4 10.7-3.6L172.9 304l166.1 0 29.8 59.6c2 4 6.8 5.6 10.7 3.6s5.6-6.8 3.6-10.7l-120-240c-1.4-2.7-4.1-4.4-7.2-4.4zm0 25.9L331.1 288l-150.1 0L256 137.9z" />
    </Icon>
);

export default CircleA;