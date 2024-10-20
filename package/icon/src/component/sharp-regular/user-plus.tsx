
import { Icon } from "../../index";

/**
 * A component that renders the `user-plus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-plus?s=sharp-regular user-plus}
 * @preview ![user-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-plus.svg)
 */
const UserPlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM65 464l318 0L348.5 352 99.5 352 65 464zM384 304l49.2 160L448 512l-50.2 0L50.2 512 0 512l14.8-48L64 304l160 0 160 0zM224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM504 336l0-24 0-64-64 0-24 0 0-48 24 0 64 0 0-64 0-24 48 0 0 24 0 64 64 0 24 0 0 48-24 0-64 0 0 64 0 24-48 0z" />
    </Icon>
);

export default UserPlus;