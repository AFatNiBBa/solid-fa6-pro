
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-right?s=thin circle-caret-right}
 * @preview ![circle-caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-caret-right.svg)
 */
const CircleCaretRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm352 0c0-7.3-3-14.3-8.4-19.3L234.4 134.8c-4.7-4.4-10.8-6.8-17.2-6.8c-13.9 0-25.2 11.3-25.2 25.2l0 205.6c0 13.9 11.3 25.2 25.2 25.2c6.4 0 12.5-2.4 17.2-6.8L343.6 275.3c5.4-5 8.4-12 8.4-19.3zm-19.3-7.6c2.1 2 3.3 4.7 3.3 7.6s-1.2 5.6-3.3 7.6L223.5 365.5c-1.7 1.6-4 2.5-6.3 2.5c-5.1 0-9.2-4.1-9.2-9.2l0-205.6c0-5.1 4.1-9.2 9.2-9.2c2.3 0 4.6 .9 6.3 2.5L332.7 248.4z" />
    </Icon>
);

export default CircleCaretRight;