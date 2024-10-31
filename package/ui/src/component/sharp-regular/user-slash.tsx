
import { Icon } from "../../index";

/**
 * A component that renders the `user-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-slash?s=sharp-regular user-slash}
 * @preview ![user-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-slash.svg)
 */
const UserSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M400 128c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 18 5.9 34.6 15.9 47.9l33.5 26c9.4 3.9 19.7 6 30.5 6c44.2 0 80-35.8 80-80zM353.4 251.6L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7L192 126.3C192.9 56.4 249.9 0 320 0c70.7 0 128 57.3 128 128c0 59.1-40.1 108.9-94.6 123.6zM324.9 352l-129.5 0L161 464l306.1 0L528 512l-34.2 0-347.6 0L96 512l14.8-48L160 304l104 0 60.9 48z" />
    </Icon>
);

export default UserSlash;