
import { Icon } from "../../index";

/**
 * A component that renders the `user-vneck` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-vneck?s=regular user-vneck}
 * @preview ![user-vneck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-vneck.svg)
 */
const UserVneck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm128-80A128 128 0 1 1 96 128a128 128 0 1 1 256 0zM48.3 464l351.5 0c-3.1-47.3-33.7-87.3-76-103.8L274 422.4c-25.6 32-74.3 32-100 0l-49.7-62.2C82 376.7 51.4 416.7 48.3 464zm85-156.4c5.6-1.2 11.3 1.1 14.9 5.6l63.4 79.2c6.4 8 18.6 8 25 0l63.4-79.2c3.6-4.5 9.3-6.7 14.9-5.6C390.9 323.6 448 391.1 448 472l0 8c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32l0-8c0-80.9 57.1-148.4 133.3-164.4z" />
    </Icon>
);

export default UserVneck;