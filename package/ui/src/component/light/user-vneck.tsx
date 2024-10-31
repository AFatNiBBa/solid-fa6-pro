
import { Icon } from "../../index";

/**
 * A component that renders the `user-vneck` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-vneck?s=light user-vneck}
 * @preview ![user-vneck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-vneck.svg)
 */
const UserVneck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm128-96A128 128 0 1 1 96 128a128 128 0 1 1 256 0zM185.6 418.1l-57.2-76.3C72.6 358.8 32 410.7 32 472l0 8 384 0 0-8c0-61.3-40.6-113.2-96.4-130.1l-57.2 76.3c-19.2 25.6-57.6 25.6-76.8 0zM132.1 307.8c5.8-1.3 11.7 1.2 15.3 5.9l63.9 85.2c6.4 8.5 19.2 8.5 25.6 0l63.9-85.2c3.6-4.7 9.5-7.2 15.3-5.9C391.4 324.3 448 391.5 448 472l0 8c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32l0-8c0-80.5 56.6-147.7 132.1-164.1z" />
    </Icon>
);

export default UserVneck;