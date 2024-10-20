
import { Icon } from "../../index";

/**
 * A component that renders the `screen-users` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screen-users?s=sharp-regular screen-users}
 * @preview ![screen-users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/screen-users.svg)
 */
const ScreenUsers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 384a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm96 128l-32-96L32 416 0 512l192 0zM320 384a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm96 128l-32-96-128 0-32 96 192 0zM608 320a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm0 96l-128 0-32 96 192 0-32-96zM560 48L80 48l0 177.3c-18.3 3.1-34.8 11.3-48 23.1L32 48 32 0 80 0 560 0l48 0 0 48 0 200.4c-13.2-11.8-29.7-20.1-48-23.1L560 48z" />
    </Icon>
);

export default ScreenUsers;