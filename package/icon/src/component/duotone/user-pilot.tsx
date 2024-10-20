
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-pilot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pilot?s=duotone user-pilot}
 * @preview ![user-pilot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-pilot.svg)
 */
const UserPilot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 192c0-13 1.9-25.5 5.5-37.2c23.9 9.6 62.8 20.1 113.9 21.1c2.7 .1 5.5 .1 8.2 .1l.4 0 .4 0c2.7 0 5.5 0 8.2-.1c51.1-1.1 90.1-11.5 113.9-21.1c3.6 11.8 5.5 24.3 5.5 37.2c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
        <path d="M230.1 .8l152 40c8.6 2.3 15.3 9.1 17.3 17.8s-1 17.8-7.8 23.6l-23.8 20.4c.1 1 .1 2 .1 3.1l0 21.2c0 10.7-5.3 20.8-15.1 25.2c-24.1 10.8-68.6 24-128.9 24s-104.8-13.2-128.9-24C85.3 147.7 80 137.6 80 126.9l0-21.2c0-1 0-2.1 .1-3.1L56.4 82.2c-6.8-5.8-9.8-14.9-7.8-23.6s8.7-15.6 17.3-17.8l152-40c4-1.1 8.2-1.1 12.2 0zM161.7 72.8c-4 7.9-.7 17.5 7.2 21.5l48 24c4.5 2.3 9.8 2.3 14.3 0l48-24c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2L224 86.1 183.2 65.7c-7.9-4-17.5-.7-21.5 7.2zM142.1 354.6l72.3 54.2c5.7 4.3 13.5 4.3 19.2 0l72.3-54.2c2.2-1.7 4.9-2.6 7.7-2.6C387.8 352 448 412.2 448 486.4c0 14.1-11.5 25.6-25.6 25.6L25.6 512C11.5 512 0 500.5 0 486.4C0 412.2 60.2 352 134.4 352c2.8 0 5.5 .9 7.7 2.6zM320 432c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default UserPilot;