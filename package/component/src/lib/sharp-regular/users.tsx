
import { Icon } from "../../index";

/**
 * A component that renders the `users` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users?s=sharp-regular users}
 * @preview ![users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/users.svg)
 */
const Users: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM48 192L0 320l235.3 0c-26.6-23.5-43.3-57.8-43.3-96c0-11 1.4-21.8 4-32L48 192zM640 320L592 192l-148 0c2.6 10.2 4 21 4 32c0 38.2-16.8 72.5-43.3 96L640 320zM320 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM211.7 400l216.6 0 19.2 64-255 0 19.2-64zM464 352l-288 0L142.4 464 128 512l50.1 0 283.8 0 50.1 0-14.4-48L464 352z" />
    </Icon>
);

export default Users;