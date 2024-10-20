
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-left?s=thin circle-caret-left}
 * @preview ![circle-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-caret-left.svg)
 */
const CircleCaretLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 1 480 0A240 240 0 1 1 16 256zm496 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zm-352 0c0 7.3 3 14.3 8.4 19.3L277.6 377.2c4.7 4.4 10.8 6.8 17.2 6.8c13.9 0 25.2-11.3 25.2-25.2l0-205.6c0-13.9-11.3-25.2-25.2-25.2c-6.4 0-12.5 2.4-17.2 6.8L168.4 236.7c-5.4 5-8.4 12-8.4 19.3zm19.3 7.6c-2.1-2-3.3-4.7-3.3-7.6s1.2-5.6 3.3-7.6L288.5 146.5c1.7-1.6 4-2.5 6.3-2.5c5.1 0 9.2 4.1 9.2 9.2l0 205.6c0 5.1-4.1 9.2-9.2 9.2c-2.3 0-4.6-.9-6.3-2.5L179.3 263.6z" />
    </Icon>
);

export default CircleCaretLeft;