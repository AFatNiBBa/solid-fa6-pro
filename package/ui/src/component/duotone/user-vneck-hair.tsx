
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-vneck-hair` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-vneck-hair?s=duotone user-vneck-hair}
 * @preview ![user-vneck-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-vneck-hair.svg)
 */
const UserVneckHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 128c0 70.7 57.3 128 128 128s128-57.3 128-128c0-11-1.4-21.8-4-32c-12 0-24 0-36 0c-22.8 0-42.8-11.9-54.1-29.8C241 93.7 210.6 112 176 112c-18.7 0-37.3 0-56 0c-7.9 0-15.5-1.7-22.3-4.6C96.6 114.1 96 121 96 128z" />
        <path d="M120 112l56 0c34.6 0 65-18.3 81.9-45.8C269.2 84.1 289.2 96 312 96l36 0C333.8 40.8 283.6 0 224 0C160.3 0 107.5 46.5 97.7 107.4c6.8 3 14.4 4.6 22.3 4.6zm25.9 202.9c-3.5-5.2-9.8-8-15.9-6.6C55.5 325.5 0 392.3 0 472l0 8c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-8c0-79.7-55.5-146.5-130-163.7c-6.1-1.4-12.4 1.4-15.9 6.6L237.3 412c-6.3 9.5-20.3 9.5-26.6 0l-64.8-97.1z" />
    </Icon>
);

export default UserVneckHair;