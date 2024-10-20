
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users-rays` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-rays?s=sharp-duotone-solid users-rays}
 * @preview ![users-rays](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/users-rays.svg)
 */
const UsersRays: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 336l94.3 0 19.4-58.1 7.3-21.9L120 256 96 336zm31.8-160a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM208 384l224 0-16-48-16-48-17.6 0-124.8 0L240 288l-16 48-16 48zm48-192a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm160-16a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm7.1 80l7.3 21.9L449.7 336l94.3 0-24-80-96.9 0z" />
        <path d="M57 23L40 6.1 6.1 40 23 57l56 56 17 17L129.9 96 113 79 57 23zM583 23L527 79l-17 17L544 129.9l17-17 56-56 17-17L600 6.1 583 23zM40 505.9l17-17 56-56 17-17L96 382.1 79 399 23 455l-17 17L40 505.9zm543-17l17 17L633.9 472l-17-17-56-56-17-17L510.1 416l17 17 56 56z" />
    </Icon>
);

export default UsersRays;