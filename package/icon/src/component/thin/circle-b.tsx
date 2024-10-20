
import { Icon } from "../../index";

/**
 * A component that renders the `circle-b` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-b?s=thin circle-b}
 * @preview ![circle-b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-b.svg)
 */
const CircleB: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152l0 104 0 104c0 13.3 10.7 24 24 24l108 0c37.6 0 68-30.4 68-68c0-31.6-21.6-58.2-50.9-65.8C325.4 237.8 336 218.1 336 196c0-37.6-30.4-68-68-68l-84 0c-13.3 0-24 10.7-24 24zm160 44c0 28.7-23.3 52-52 52l-92 0 0-96c0-4.4 3.6-8 8-8l84 0c28.7 0 52 23.3 52 52zM176 360l0-96 92 0 24 0c28.7 0 52 23.3 52 52s-23.3 52-52 52l-108 0c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default CircleB;