
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users?s=duotone users}
 * @preview ![users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/users.svg)
 */
const Users: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 298.7C0 310.4 9.6 320 21.3 320l213.3 0c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7l-42.7 0C47.8 192 0 239.8 0 298.7zM64 80a80 80 0 1 0 160 0A80 80 0 1 0 64 80zM404.7 320c.2 0 .4 0 .7 0l213.3 0c11.8 0 21.3-9.6 21.3-21.3C640 239.8 592.2 192 533.3 192l-42.7 0c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 38.2-16.8 72.5-43.3 96zM432 80a80 80 0 1 0 160 0A80 80 0 1 0 432 80z" />
        <path d="M320 320a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm-58.7 32C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7l330.7 0c14.7 0 26.7-11.9 26.7-26.7C512 411.7 452.3 352 378.7 352l-117.3 0z" />
    </Icon>
);

export default Users;