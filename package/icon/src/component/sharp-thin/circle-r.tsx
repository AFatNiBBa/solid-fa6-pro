
import { Icon } from "../../index";

/**
 * A component that renders the `circle-r` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-r?s=sharp-thin circle-r}
 * @preview ![circle-r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-r.svg)
 */
const CircleR: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 128l0 8 0 144 0 96 0 8 16 0 0-8 0-88 91.9 0 69.3 96 19.7 0-70.3-97.3c37.2-6.9 65.3-39.5 65.3-78.7c0-44.2-35.8-80-80-80l-104 0-8 0zm16 144l0-128 96 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-96 0z" />
    </Icon>
);

export default CircleR;