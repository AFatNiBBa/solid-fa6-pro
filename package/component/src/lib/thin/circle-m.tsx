
import { Icon } from "../../index";

/**
 * A component that renders the `circle-m` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-m?s=thin circle-m}
 * @preview ![circle-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-m.svg)
 */
const CircleM: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM142.5 131.4c-2-2.8-5.6-4-9-3s-5.6 4.1-5.6 7.6l0 240c0 4.4 3.6 8 8 8s8-3.6 8-8l0-215L249.5 308.6c1.5 2.1 3.9 3.4 6.5 3.4s5-1.2 6.5-3.4L368 161l0 215c0 4.4 3.6 8 8 8s8-3.6 8-8l0-240c0-3.5-2.2-6.6-5.6-7.6s-6.9 .1-9 3L256 290.2 142.5 131.4z" />
    </Icon>
);

export default CircleM;