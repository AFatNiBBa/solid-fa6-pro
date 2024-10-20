
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-alien` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-alien?s=sharp-duotone-solid user-alien}
 * @preview ![user-alien](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-alien.svg)
 */
const UserAlien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 512L48 352l80 0 96 72 96-72 80 0 48 160L0 512zM64 167C64 74.8 135.6 0 224 0s160 74.8 160 167c0 119.3-160 217-160 217s-160-97.7-160-217zm48 9l0 16c0 35.3 28.7 64 64 64l16 0 16 0 0-16c0-35.3-28.7-64-64-64l-16 0-16 0zm128 64l0 16 16 0 16 0c35.3 0 64-28.7 64-64l0-16-16 0-16 0c-35.3 0-64 28.7-64 64z" />
        <path d="M144 176c35.3 0 64 28.7 64 64l0 16-16 0-16 0c-35.3 0-64-28.7-64-64l0-16 16 0 16 0zm160 0l16 0 16 0 0 16c0 35.3-28.7 64-64 64l-16 0-16 0 0-16c0-35.3 28.7-64 64-64z" />
    </Icon>
);

export default UserAlien;