
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-group` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group?s=sharp-duotone-solid user-group}
 * @preview ![user-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-group.svg)
 */
const UserGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M352.7 223.1C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112c-31 0-59-12.6-79.3-32.9zM422.4 320L576 320l64 192-158.5 0-2.9-9.4L422.4 320z" />
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM448 512L384 304 64 304 0 512l448 0z" />
    </Icon>
);

export default UserGroup;