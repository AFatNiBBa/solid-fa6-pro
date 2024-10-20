
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-pilot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pilot?s=sharp-duotone-solid user-pilot}
 * @preview ![user-pilot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-pilot.svg)
 */
const UserPilot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 192c0-13 1.9-25.5 5.5-37.2c23.9 9.6 62.8 20.1 113.9 21.1c2.7 .1 5.5 .1 8.2 .1l.4 0 .4 0c2.7 0 5.5 0 8.2-.1c51.1-1.1 90.1-11.5 113.9-21.1c3.6 11.8 5.5 24.3 5.5 37.2c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
        <path d="M80 99.2L48 80l0-32L224 0 400 48l0 32L368 99.2l0 44.8c-16 10.7-67.2 32-144 32s-128-21.3-144-32l0-44.8zm88.8-40.7L154.5 87.2l14.3 7.2 48 24 7.2 3.6 7.2-3.6 48-24 14.3-7.2L279.2 58.5l-14.3 7.2L224 86.1 183.2 65.7l-14.3-7.2zM138.7 352L224 416l85.3-64 90.7 0 48 160L0 512 48 352l90.7 0zM320 416l0 32 16 0 32 0 16 0 0-32-16 0-32 0-16 0z" />
    </Icon>
);

export default UserPilot;