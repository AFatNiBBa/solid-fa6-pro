
import { Icon } from "../../index";

/**
 * A component that renders the `circle-n` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-n?s=solid circle-n}
 * @preview ![circle-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-n.svg)
 */
const CircleN: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM203.7 138.3L304 283.2 304 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 208c0 10.5-6.8 19.8-16.8 22.9s-20.9-.6-26.9-9.2L208 228.8 208 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208c0-10.5 6.8-19.8 16.8-22.9s20.9 .6 26.9 9.2z" />
    </Icon>
);

export default CircleN;