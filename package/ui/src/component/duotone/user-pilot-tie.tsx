
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-pilot-tie` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pilot-tie?s=duotone user-pilot-tie}
 * @preview ![user-pilot-tie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-pilot-tie.svg)
 */
const UserPilotTie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 192c0-13 1.9-25.5 5.5-37.2c23.9 9.6 62.8 20.1 113.9 21.1c2.7 .1 5.5 .1 8.2 .1l.4 0 .4 0c2.7 0 5.5 0 8.2-.1c51.1-1.1 90.1-11.5 113.9-21.1c3.6 11.8 5.5 24.3 5.5 37.2c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
        <path d="M230.1 .8l152 40c8.6 2.3 15.3 9.1 17.3 17.8s-1 17.8-7.8 23.6l-23.8 20.4c.1 1 .1 2 .1 3.1l0 21.2c0 10.7-5.3 20.8-15.1 25.2c-24.1 10.8-68.6 24-128.9 24s-104.8-13.2-128.9-24C85.3 147.7 80 137.6 80 126.9l0-21.2c0-1 0-2.1 .1-3.1L56.4 82.2c-6.8-5.8-9.8-14.9-7.8-23.6s8.7-15.6 17.3-17.8l152-40c4-1.1 8.2-1.1 12.2 0zM161.7 72.8c-4 7.9-.7 17.5 7.2 21.5l48 24c4.5 2.3 9.8 2.3 14.3 0l48-24c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2L224 86.1 183.2 65.7c-7.9-4-17.5-.7-21.5 7.2zM208 416l-20.4-40.8c-5.3-10.6 2.4-23.2 14.3-23.2l44.2 0c11.9 0 19.6 12.5 14.3 23.2L240 416l12.2 48.9L315 360.3c3-5 8.6-8.1 14.4-7.4C396.2 360.8 448 417.5 448 486.4c0 14.1-11.5 25.6-25.6 25.6L256 512s0 0 0 0l-64 0s0 0 0 0L25.6 512C11.5 512 0 500.5 0 486.4c0-68.9 51.8-125.6 118.6-133.5c5.8-.7 11.4 2.4 14.4 7.4l62.8 104.6L208 416zm128 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0z" />
    </Icon>
);

export default UserPilotTie;