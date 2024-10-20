
import { Icon } from "../../index";

/**
 * A component that renders the `user-magnifying-glass` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-magnifying-glass?s=regular user-magnifying-glass}
 * @preview ![user-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-magnifying-glass.svg)
 */
const UserMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM49.3 464c8.9-63.3 63.3-112 129-112l91.4 0c7.5 0 14.8 .6 21.9 1.8c-2.3-10.9-3.6-22.2-3.6-33.8c0-5.1 .2-10.1 .7-15c-6.2-.7-12.6-1-19-1l-91.4 0C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-.8 0-1.5 0-2.3c-25 0-48.7-5.8-69.8-16L49.3 464zM448 240.1a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 208c26.7 0 51.4-8.2 71.9-22.1L599 505.1c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-79.1-79.1c14-20.5 22.1-45.3 22.1-71.9c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128z" />
    </Icon>
);

export default UserMagnifyingGlass;