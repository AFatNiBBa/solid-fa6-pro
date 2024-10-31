
import { Icon } from "../../index";

/**
 * A component that renders the `circle-w` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-w?s=thin circle-w}
 * @preview ![circle-w](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-w.svg)
 */
const CircleW: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM127.7 149.7c-1.3-4.2-5.7-6.6-10-5.4s-6.6 5.7-5.4 10l72 240c1 3.4 4.1 5.7 7.7 5.7s6.7-2.3 7.7-5.7L256 204.2l56.3 190.1c1 3.4 4.1 5.7 7.7 5.7s6.7-2.3 7.7-5.7l72-240c1.3-4.2-1.1-8.7-5.4-10s-8.7 1.1-10 5.4L320 364 263.7 173.7c-1-3.4-4.1-5.7-7.7-5.7s-6.7 2.3-7.7 5.7L192 364 127.7 149.7z" />
    </Icon>
);

export default CircleW;