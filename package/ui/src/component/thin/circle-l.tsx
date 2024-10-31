
import { Icon } from "../../index";

/**
 * A component that renders the `circle-l` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-l?s=thin circle-l}
 * @preview ![circle-l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-l.svg)
 */
const CircleL: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 136c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 224c0 13.3 10.7 24 24 24l160 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-160 0c-4.4 0-8-3.6-8-8l0-224z" />
    </Icon>
);

export default CircleL;