
import { Icon } from "../../index";

/**
 * A component that renders the `martini-glass` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass?s=sharp-thin martini-glass}
 * @preview ![martini-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/martini-glass.svg)
 */
const MartiniGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M130.9 144l250.2 0L256.2 272.8l-.4 0L130.9 144zm-15.5-16L16 25.5 16 16l480 0 0 9.5L396.6 128l-281.2 0zM244.9 284.5l3.1 3.2L248 496l-112 0-8 0 0 16 8 0 120 0 120 0 8 0 0-16-8 0-112 0 0-208.2 3.1-3.2L512 32l0-16 0-16L496 0 16 0 0 0 0 16 0 32 244.9 284.5z" />
    </Icon>
);

export default MartiniGlass;