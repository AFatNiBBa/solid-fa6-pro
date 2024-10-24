
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-doctor-hair` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor-hair?s=sharp-duotone-solid user-doctor-hair}
 * @preview ![user-doctor-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-doctor-hair.svg)
 */
const UserDoctorHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 128c0 70.7 57.3 128 128 128s128-57.3 128-128c0-11.1-1.4-21.8-4-32l-60 0L256 64l-48 48L97 112c-.7 5.2-1 10.6-1 16z" />
        <path d="M208 112L97 112C104.9 48.9 158.7 0 224 0c59.6 0 109.8 40.8 124 96l-60 0L256 64l-48 48zM160 370.3l0-66.3 128 0 0 58c-27.6 7.1-48 32.2-48 62l0 40 0 16 16 0 16 0 16 0 0-32-16 0 0-24c0-17.7 14.3-32 32-32s32 14.3 32 32l0 24-16 0 0 32 16 0 16 0 16 0 0-16 0-40c0-29.8-20.4-54.9-48-62l0-58 64 0 64 208L0 512 64 304l64 0 0 66.3c-23.1 6.9-40 28.3-40 53.7c0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.4-16.9-46.8-40-53.7zM120 424a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default UserDoctorHair;