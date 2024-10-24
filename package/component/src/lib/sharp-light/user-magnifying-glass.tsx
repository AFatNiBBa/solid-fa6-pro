
import { Icon } from "../../index";

/**
 * A component that renders the `user-magnifying-glass` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-magnifying-glass?s=sharp-light user-magnifying-glass}
 * @preview ![user-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-magnifying-glass.svg)
 */
const UserMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM87.6 336l201.2 0c-.5-5.3-.8-10.6-.8-16s.3-10.7 .8-16L64 304 9.8 480 0 512l33.5 0 381 0 33.5 0-9.8-32-33.5 0L192 480 43.3 480 87.6 336zM448 224.1a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224c29.6 0 56.8-10 78.5-26.9L604.7 499l11.3 11.3 22.6-22.7-11.3-11.3-78.1-77.7C566 376.9 576 349.7 576 320.2c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128z" />
    </Icon>
);

export default UserMagnifyingGlass;