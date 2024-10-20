
import { Icon } from "../../index";

/**
 * A component that renders the `users` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users?s=thin users}
 * @preview ![users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/users.svg)
 */
const Users: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 80a64 64 0 1 1 128 0A64 64 0 1 1 80 80zm144 0A80 80 0 1 0 64 80a80 80 0 1 0 160 0zm96 64a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm-58.7 48l117.3 0C443.5 368 496 420.5 496 485.3c0 5.9-4.8 10.7-10.7 10.7l-330.7 0c-5.9 0-10.7-4.8-10.7-10.7C144 420.5 196.5 368 261.3 368zm0-16C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7l330.7 0c14.7 0 26.7-11.9 26.7-26.7C512 411.7 452.3 352 378.7 352l-117.3 0zM512 16a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 144A80 80 0 1 0 512 0a80 80 0 1 0 0 160zm24 48c48.6 0 88 39.4 88 88c0 4.4 3.6 8 8 8s8-3.6 8-8c0-57.4-46.6-104-104-104l-92 0c1.3 5.2 2.4 10.6 3 16l89 0zm-343 0c.7-5.4 1.7-10.8 3-16l-92 0C46.6 192 0 238.6 0 296c0 4.4 3.6 8 8 8s8-3.6 8-8c0-48.6 39.4-88 88-88l89 0z" />
    </Icon>
);

export default Users;