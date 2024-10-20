
import { Icon } from "../../index";

/**
 * A component that renders the `circle-d` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-d?s=thin circle-d}
 * @preview ![circle-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-d.svg)
 */
const CircleD: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 150.9c0-3.8 3.1-6.9 6.9-6.9l73.1 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-73.1 0c-3.8 0-6.9-3.1-6.9-6.9l0-210.3zm6.9-22.9c-12.6 0-22.9 10.2-22.9 22.9l0 210.3c0 12.6 10.2 22.9 22.9 22.9l73.1 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-73.1 0z" />
    </Icon>
);

export default CircleD;