
import { Icon } from "../../index";

/**
 * A component that renders the `user-group` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group?s=regular user-group}
 * @preview ![user-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-group.svg)
 */
const UserGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M1.5 458.7c6-45.5 29.2-85.6 62.8-113.6C95.3 319.4 135 304 178.3 304l45.7 0 45.7 0c43.3 0 83 15.4 113.9 41.1c33.6 28 56.8 68.1 62.8 113.6c1 7.7 1.5 15.6 1.5 23.6c0 16.4-13.3 29.7-29.7 29.7l-19.6 0L49.3 512l-19.6 0C13.3 512 0 498.7 0 482.3c0-8 .5-15.9 1.5-23.6zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zm208 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM178.3 352c-47.8 0-89.5 25.7-112.2 64c-8.6 14.4-14.4 30.7-16.8 48L98 464 350 464l48.8 0c-.4-2.7-.8-5.3-1.4-8c-2.9-14.3-8.2-27.8-15.5-40c-22.7-38.3-64.4-64-112.2-64l-91.4 0zm431 160l-136.9 0c4.9-8.8 7.6-18.9 7.6-29.7c0-65-29.5-123.2-75.9-161.8c4.3-.4 8.7-.5 13.2-.5l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
    </Icon>
);

export default UserGroup;