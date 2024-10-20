
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-tie-hair` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie-hair?s=sharp-duotone-solid user-tie-hair}
 * @preview ![user-tie-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-tie-hair.svg)
 */
const UserTieHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 128c0 70.7 57.3 128 128 128s128-57.3 128-128c0-11.1-1.4-21.8-4-32l-60 0L256 64c-16 16-32 32-48 48L97 112c-.7 5.2-1 10.6-1 16z" />
        <path d="M256 64l32 32 60 0C333.8 40.8 283.6 0 224 0C158.7 0 104.9 48.9 97 112l111 0 48-48zm24 448l168 0L384 320l-71.8 0L272.2 483.1 238.9 359.2 272 304l-48 0-48 0 33.1 55.2L175.8 483.1 135.8 320 64 320 0 512l168 0 14.9 0 82.3 0 14.9 0z" />
    </Icon>
);

export default UserTieHair;