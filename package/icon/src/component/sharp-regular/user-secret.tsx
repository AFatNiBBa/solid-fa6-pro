
import { Icon } from "../../index";

/**
 * A component that renders the `user-secret` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-secret?s=sharp-regular user-secret}
 * @preview ![user-secret](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-secret.svg)
 */
const UserSecret: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M121.1 87.5L160 0l64 32L288 0l38.9 87.5C380.5 96 416 111 416 128c0 13.4-22.1 25.6-57.7 34.3c1.1 7.1 1.7 14.3 1.7 21.7c0 13.9-2.1 27.4-6 40l10.9 0 51.1 0-17.5 48-5.8 16-17.5 48 40.7 0 2.9 15.9L439.3 464l8.7 48-48.8 0L280 512l-112 0L48.8 512 0 512l8.7-48L29.1 351.9 32 336l40.7 0L55.3 288l-5.8-16L32 224l51.1 0L94 224c-3.9-12.6-6-26.1-6-40c0-7.4 .6-14.6 1.7-21.7C54.1 153.6 32 141.4 32 128c0-17 35.5-32 89.1-40.5zM268 464l122.5 0-14.5-80-.7 0-68.5 0 23.4-64.4L347.5 272l-19.8 0c-16.9 19.9-39.5 34.9-65.2 42.5L240 352l28 112zM185.5 314.5c-25.7-7.6-48.3-22.6-65.2-42.5l-19.8 0 17.3 47.6L141.3 384l-68.5 0-.7 0L57.5 464 180 464l28-112-22.5-37.5zM224 272c34.2 0 63.8-19.5 78.4-48L240 224l-8-32-16 0-8 32-62.4 0c14.6 28.5 44.2 48 78.4 48z" />
    </Icon>
);

export default UserSecret;