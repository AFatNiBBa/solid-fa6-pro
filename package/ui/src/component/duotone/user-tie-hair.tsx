
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-tie-hair` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie-hair?s=duotone user-tie-hair}
 * @preview ![user-tie-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-tie-hair.svg)
 */
const UserTieHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 128c0 70.7 57.3 128 128 128s128-57.3 128-128c0-11-1.4-21.8-4-32c-12 0-24 0-36 0c-22.8 0-42.8-11.9-54.1-29.8C241 93.7 210.6 112 176 112c-18.7 0-37.3 0-56 0c-7.9 0-15.5-1.7-22.3-4.6C96.6 114.1 96 121 96 128z" />
        <path d="M176 112c34.6 0 65-18.3 81.9-45.8C269.2 84.1 289.2 96 312 96l36 0C333.8 40.8 283.6 0 224 0C160.3 0 107.5 46.5 97.7 107.4c6.8 3 14.4 4.6 22.3 4.6l56 0zM279.7 510.9c1.8 .7 3.8 1.1 5.8 1.1l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c2.1 0 4-.4 5.8-1.1L168 512l112 0-.3-1.1z" />
    </Icon>
);

export default UserTieHair;