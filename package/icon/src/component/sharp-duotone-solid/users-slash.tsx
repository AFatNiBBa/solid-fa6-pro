
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-slash?s=sharp-duotone-solid users-slash}
 * @preview ![users-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/users-slash.svg)
 */
const UsersSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 320l235.3 0c-20.6-18.2-35.3-42.8-40.8-70.8L121.8 192 48 192 0 320zM76.7 36.8c42 32.6 83.9 65.2 125.9 97.7C215.9 120.2 224 101.1 224 80c0-44.2-35.8-80-80-80C115.7 0 90.9 14.6 76.7 36.8zM128 512l384 0-5-16.5L324.9 352 176 352 128 512zM243.4 166.2c50.6 39.2 101.1 78.5 151.7 117.7c13.1-16.4 21-37.2 21-59.9c0-53-43-96-96-96c-31.3 0-59.1 15-76.6 38.2zM420.3 303.5c7.1 5.5 14.1 11 21.2 16.5L640 320 592 192l-148 0c2.6 10.2 4 21 4 32c0 30.1-10.4 57.7-27.7 79.5zM432 80a80 80 0 1 0 160 0A80 80 0 1 0 432 80z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default UsersSlash;