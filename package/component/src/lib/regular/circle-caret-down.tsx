
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-down?s=regular circle-caret-down}
 * @preview ![circle-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-caret-down.svg)
 */
const CircleCaretDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zm0 368c6.7 0 13-2.8 17.6-7.7l104-112c6.5-7 8.2-17.2 4.4-25.9s-12.5-14.4-22-14.4l-208 0c-9.5 0-18.2 5.7-22 14.4s-2.1 18.9 4.4 25.9l104 112c4.5 4.9 10.9 7.7 17.6 7.7z" />
    </Icon>
);

export default CircleCaretDown;