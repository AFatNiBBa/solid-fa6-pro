
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-doctor-hair` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor-hair?s=duotone user-doctor-hair}
 * @preview ![user-doctor-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-doctor-hair.svg)
 */
const UserDoctorHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 128c0 70.7 57.3 128 128 128s128-57.3 128-128c0-11-1.4-21.8-4-32c-12 0-24 0-36 0c-22.8 0-42.8-11.9-54.1-29.8C241 93.7 210.6 112 176 112c-18.7 0-37.3 0-56 0c-7.9 0-15.5-1.7-22.3-4.6C96.6 114.1 96 121 96 128z" />
        <path d="M120 112l56 0c34.6 0 65-18.3 81.9-45.8C269.2 84.1 289.2 96 312 96l36 0C333.8 40.8 283.6 0 224 0C160.3 0 107.5 46.5 97.7 107.4c6.8 3 14.4 4.6 22.3 4.6zM288 304.2c-2.7-.1-5.3-.2-8-.2l-112 0c-2.7 0-5.3 .1-8 .2l0 66.1c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7l0-61.5C54.5 326.7 0 393 0 472l0 8c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-8c0-79-54.5-145.3-128-163.2l0 53.2c27.6 7.1 48 32.2 48 62l0 40c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l0-24c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 24c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-40c0-29.8 20.4-54.9 48-62l0-57.8zM168 424a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default UserDoctorHair;