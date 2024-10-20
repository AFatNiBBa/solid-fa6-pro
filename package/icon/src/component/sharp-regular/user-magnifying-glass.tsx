
import { Icon } from "../../index";

/**
 * A component that renders the `user-magnifying-glass` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-magnifying-glass?s=sharp-regular user-magnifying-glass}
 * @preview ![user-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-magnifying-glass.svg)
 */
const UserMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 48a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM99.5 352l191.7 0c-2.1-10.3-3.2-21-3.2-32c0-5.4 .3-10.7 .8-16L224 304 64 304 14.8 464 0 512l50.2 0 347.6 0 50.2 0-9.9-32.3c-21.4-1.3-41.6-6.8-59.9-15.7L65 464 99.5 352zM352 128A128 128 0 1 0 96 128a128 128 0 1 0 256 0zm96 112.1a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 208c26.7 0 51.5-8.2 72-22.1l63.1 62.7 17 16.9 33.8-34-17-16.9-63-62.6c13.9-20.5 22.1-45.3 22.1-71.9c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128z" />
    </Icon>
);

export default UserMagnifyingGlass;