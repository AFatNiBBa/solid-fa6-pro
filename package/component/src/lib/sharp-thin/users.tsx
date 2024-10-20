
import { Icon } from "../../index";

/**
 * A component that renders the `users` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users?s=sharp-thin users}
 * @preview ![users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/users.svg)
 */
const Users: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 80a64 64 0 1 1 128 0A64 64 0 1 1 80 80zm144 0A80 80 0 1 0 64 80a80 80 0 1 0 160 0zm96 64a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM187.9 368l264.2 0 38.4 128-341 0 38.4-128zM464 352l-288 0L132.8 496 128 512l16.7 0 350.6 0 16.7 0-4.8-16L464 352zM196 192L48 192 6 304l17.1 0 36-96L193 208c.7-5.4 1.7-10.8 3-16zM444 192c1.3 5.2 2.4 10.6 3 16l133.9 0 36 96 17.1 0L592 192l-148 0zm4-112a64 64 0 1 1 128 0A64 64 0 1 1 448 80zm144 0A80 80 0 1 0 432 80a80 80 0 1 0 160 0z" />
    </Icon>
);

export default Users;