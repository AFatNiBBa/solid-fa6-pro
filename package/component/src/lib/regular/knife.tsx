
import { Icon } from "../../index";

/**
 * A component that renders the `knife` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/knife?s=regular knife}
 * @preview ![knife](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/knife.svg)
 */
const Knife: typeof Icon = x => (
    <Icon {...x}>
        <path d="M451.4 10.8C458.1 3.9 467.2 0 476.8 0C496.2 0 512 15.8 512 35.2l0 48.4c0 65.5-25.9 128.4-72.1 174.9l-70.2 70.6c-31.2 31.4-82 31.5-113.3 .2L233.1 306 41.3 504.7c-9.2 9.5-24.4 9.8-33.9 .6s-9.8-24.4-.6-33.9L215.5 255.1 451.4 10.8zm-185 260.7l23.8 23.8c12.5 12.5 32.8 12.5 45.3-.1l70.2-70.6c37.3-37.5 58.2-88.2 58.2-141l0-16.8L266.4 271.5z" />
    </Icon>
);

export default Knife;