
import { Icon } from "../../index";

/**
 * A component that renders the `6` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/6?s=solid 6}
 * @preview ![6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/6.svg)
 */
const $6: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3l0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" />
    </Icon>
);

export default $6;