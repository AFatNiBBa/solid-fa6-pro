
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-hair` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hair?s=sharp-duotone-solid user-hair}
 * @preview ![user-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-hair.svg)
 */
const UserHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 128c0 70.7 57.3 128 128 128s128-57.3 128-128c0-11.1-1.4-21.8-4-32l-60 0L256 64l-48 48L97 112c-.7 5.2-1 10.6-1 16z" />
        <path d="M208 112l48-48 32 32 60 0C333.8 40.8 283.6 0 224 0C158.7 0 104.9 48.9 97 112l111 0zM384 304L64 304 0 512l448 0L384 304z" />
    </Icon>
);

export default UserHair;