
import { Icon, generic } from "../../index";

/**
 * A component that renders the `screen-users` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screen-users?s=duotone screen-users}
 * @preview ![screen-users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/screen-users.svg)
 */
const ScreenUsers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 64C32 28.7 60.7 0 96 0L544 0c35.3 0 64 28.7 64 64l0 184.4c-17-15.2-39.4-24.4-64-24.4l0-160L96 64l0 160c-24.6 0-47 9.2-64 24.4L32 64z" />
        <path d="M96 384a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM64 416c-35.3 0-64 28.7-64 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-64 0zm256-32a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-35.3 0-64 28.7-64 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-64 0zm320-96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM448 480c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-64 0c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default ScreenUsers;