
import { Icon } from "../../index";

/**
 * A component that renders the `user-vneck` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-vneck?s=thin user-vneck}
 * @preview ![user-vneck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-vneck.svg)
 */
const UserVneck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 240a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0zM198.4 408.5l-63.7-84.9C66.8 338.8 16 399.5 16 472l0 8c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-8c0-72.5-50.8-133.2-118.7-148.4l-63.7 84.9c-12.8 17.1-38.4 17.1-51.2 0zM132.1 307.8c5.8-1.3 11.7 1.2 15.3 5.9l63.9 85.2c6.4 8.5 19.2 8.5 25.6 0l63.9-85.2c3.6-4.7 9.5-7.2 15.3-5.9C391.4 324.3 448 391.5 448 472l0 8c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32l0-8c0-80.5 56.6-147.7 132.1-164.1z" />
    </Icon>
);

export default UserVneck;