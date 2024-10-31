
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-group` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group?s=duotone user-group}
 * @preview ![user-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-group.svg)
 */
const UserGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M352.7 223.1C373 243.4 401 256 432 256c61.9 0 112-50.1 112-112s-50.1-112-112-112c-24.8 0-47.7 8.1-66.3 21.7C377.4 75.9 384 101.2 384 128c0 35.6-11.6 68.5-31.3 95.1zm57.5 97.1C452.9 356.8 480 411.3 480 472l0 8c0 11.7-3.1 22.6-8.6 32l137.8 0c17 0 30.7-13.8 30.7-30.7C640 392.2 567.8 320 478.7 320l-61.4 0c-2.4 0-4.8 .1-7.1 .2z" />
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
    </Icon>
);

export default UserGroup;