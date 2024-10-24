
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-up?s=regular circle-caret-up}
 * @preview ![circle-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-caret-up.svg)
 */
const CircleCaretUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-368c-6.7 0-13 2.8-17.6 7.7l-104 112c-6.5 7-8.2 17.2-4.4 25.9s12.5 14.4 22 14.4l208 0c9.5 0 18.2-5.7 22-14.4s2.1-18.9-4.4-25.9l-104-112c-4.5-4.9-10.9-7.7-17.6-7.7z" />
    </Icon>
);

export default CircleCaretUp;