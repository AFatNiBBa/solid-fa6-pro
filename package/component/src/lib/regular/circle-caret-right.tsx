
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-right?s=regular circle-caret-right}
 * @preview ![circle-caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-caret-right.svg)
 */
const CircleCaretRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm368 0c0-6.7-2.8-13-7.7-17.6l-112-104c-7-6.5-17.2-8.2-25.9-4.4s-14.4 12.5-14.4 22l0 208c0 9.5 5.7 18.2 14.4 22s18.9 2.1 25.9-4.4l112-104c4.9-4.5 7.7-10.9 7.7-17.6z" />
    </Icon>
);

export default CircleCaretRight;