
import { Icon } from "../../index";

/**
 * A component that renders the `circle-6` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-6?s=sharp-light circle-6}
 * @preview ![circle-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-6.svg)
 */
const Circle_6: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192.7 208.3C171.7 229.5 160 258.2 160 288c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-.8 0-1.6 0-2.4 0l61.8-62.8 1.2-1.2-44.9 0-79 80.3zM320 288a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
    </Icon>
);

export default Circle_6;