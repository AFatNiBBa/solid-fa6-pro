
import { Icon } from "../../index";

/**
 * A component that renders the `screen-users` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screen-users?s=solid screen-users}
 * @preview ![screen-users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/screen-users.svg)
 */
const ScreenUsers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 0C60.7 0 32 28.7 32 64l0 184.4C49 233.2 71.4 224 96 224L96 64l448 0 0 160c24.6 0 47 9.2 64 24.4L608 64c0-35.3-28.7-64-64-64L96 0zm64 320A64 64 0 1 0 32 320a64 64 0 1 0 128 0zM0 480c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-64 0c-35.3 0-64 28.7-64 64zM384 320a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM224 480c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-64 0c-35.3 0-64 28.7-64 64zm320-96a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-35.3 0-64 28.7-64 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-64 0z" />
    </Icon>
);

export default ScreenUsers;