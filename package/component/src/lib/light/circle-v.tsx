
import { Icon } from "../../index";

/**
 * A component that renders the `circle-v` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-v?s=light circle-v}
 * @preview ![circle-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-v.svg)
 */
const CircleV: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM158.3 152.8c-4-7.9-13.6-11.1-21.5-7.2s-11.1 13.6-7.2 21.5l112 224c2.7 5.4 8.3 8.8 14.3 8.8s11.6-3.4 14.3-8.8l112-224c4-7.9 .7-17.5-7.2-21.5s-17.5-.7-21.5 7.2L256 348.2 158.3 152.8z" />
    </Icon>
);

export default CircleV;