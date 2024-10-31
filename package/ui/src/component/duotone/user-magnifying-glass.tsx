
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-magnifying-glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-magnifying-glass?s=duotone user-magnifying-glass}
 * @preview ![user-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-magnifying-glass.svg)
 */
const UserMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 482.3C0 383.8 79.8 304 178.3 304l91.4 0c6.4 0 12.7 .3 19 1c-.5 4.9-.7 9.9-.7 15c0 88.4 71.6 160 160 160c0 .8 0 1.5 0 2.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0z" />
        <path d="M528 320.1a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM519.9 426c-20.5 14-45.3 22.1-71.9 22.1c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9L633 471.2c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L519.9 426z" />
    </Icon>
);

export default UserMagnifyingGlass;