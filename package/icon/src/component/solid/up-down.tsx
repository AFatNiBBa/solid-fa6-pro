
import { Icon } from "../../index";

/**
 * A component that renders the `up-down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down?s=solid up-down}
 * @preview ![up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/up-down.svg)
 */
const UpDown: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M145.6 7.7C141 2.8 134.7 0 128 0s-13 2.8-17.6 7.7l-104 112c-6.5 7-8.2 17.2-4.4 25.9S14.5 160 24 160l56 0 0 192-56 0c-9.5 0-18.2 5.7-22 14.4s-2.1 18.9 4.4 25.9l104 112c4.5 4.9 10.9 7.7 17.6 7.7s13-2.8 17.6-7.7l104-112c6.5-7 8.2-17.2 4.4-25.9s-12.5-14.4-22-14.4l-56 0 0-192 56 0c9.5 0 18.2-5.7 22-14.4s2.1-18.9-4.4-25.9l-104-112z" />
    </Icon>
);

export default UpDown;