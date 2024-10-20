
import { Icon } from "../../index";

/**
 * A component that renders the `user-group` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group?s=sharp-thin user-group}
 * @preview ![user-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-group.svg)
 */
const UserGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 128a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM21.7 496l404.7 0L372.2 320 75.8 320 21.7 496zM384 304l59.1 192 4.9 16-16.7 0L16.7 512 0 512l4.9-16L64 304l320 0zM224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM623.1 512l-141.7 0-2.9-9.4-2-6.6 141.2 0L564.5 336l-137.1 0-4.9-16L576 320l58.7 176 5.3 16-16.9 0zM432 256c-31 0-59-12.6-79.3-32.9c3.2-4.4 6.3-8.9 9.1-13.7C379.3 228.2 404.3 240 432 240c53 0 96-43 96-96s-43-96-96-96c-22.4 0-43.1 7.7-59.4 20.6c-2-5.1-4.3-10.1-6.9-14.9C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
    </Icon>
);

export default UserGroup;