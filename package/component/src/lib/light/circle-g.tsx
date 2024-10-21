
import { Icon } from "../../index";

/**
 * A component that renders the `circle-g` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-g?s=light circle-g}
 * @preview ![circle-g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-g.svg)
 */
const CircleG: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 256c0-53 43-96 96-96c24.6 0 47 9.2 64 24.4c6.6 5.9 16.7 5.3 22.6-1.3s5.3-16.7-1.3-22.6C318.7 140.3 288.8 128 256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128c0-8.8-7.2-16-16-16l-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l62.7 0c-7.6 45.4-47.1 80-94.7 80c-53 0-96-43-96-96z" />
    </Icon>
);

export default CircleG;