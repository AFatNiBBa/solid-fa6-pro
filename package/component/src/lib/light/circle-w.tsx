
import { Icon } from "../../index";

/**
 * A component that renders the `circle-w` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-w?s=light circle-w}
 * @preview ![circle-w](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-w.svg)
 */
const CircleW: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM135.1 170.8c-2.9-8.4-12-12.8-20.4-9.9s-12.8 12-9.9 20.4l72 208c2.3 6.5 8.4 10.8 15.3 10.8s13-4.6 15.1-11.1L256 236.5l48.8 152.4c2.1 6.6 8.2 11 15.1 11.1s13.1-4.3 15.3-10.8l72-208c2.9-8.4-1.5-17.5-9.9-20.4s-17.5 1.5-20.4 9.9L320.6 333.4 271.2 179.1C269.1 172.5 263 168 256 168s-13.1 4.5-15.2 11.1L191.4 333.4 135.1 170.8z" />
    </Icon>
);

export default CircleW;