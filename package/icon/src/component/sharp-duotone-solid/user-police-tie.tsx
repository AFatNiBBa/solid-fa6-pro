
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-police-tie` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-police-tie?s=sharp-duotone-solid user-police-tie}
 * @preview ![user-police-tie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-police-tie.svg)
 */
const UserPoliceTie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 192c0-13 1.9-25.5 5.5-37.2c23.9 9.6 62.8 20.1 113.9 21.1c2.7 .1 5.5 .1 8.2 .1l.4 0 .4 0c2.7 0 5.5 0 8.2-.1c51.1-1.1 90.1-11.5 113.9-21.1c3.6 11.8 5.5 24.3 5.5 37.2c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
        <path d="M80 99.2L48 80l0-32L224 0 400 48l0 32L368 99.2l0 44.8c-16 10.7-67.2 32-144 32s-128-21.3-144-32l0-44.8zM227 48.6l-3-1.2-3 1.2L189 61.4l-5 2 0 5.4c0 17.2 7 46.1 36.9 58.6l3.1 1.3 3.1-1.3C257 114.9 264 86 264 68.8l0-5.4-5-2L227 48.6zM128 352l67.8 112.9L208 416l-32-64 96 0-32 64 12.2 48.9L320 352l80 0 48 160-192 0-64 0L0 512 48 352l80 0zm224 48.4l-4.6 14.2-6.1 18.8-19.8 0-14.9 0 12.1 8.7 16 11.6-6.2 18.8L324 486.5l12-8.8 16-11.7 16 11.7 12 8.8-4.6-14.1-6.2-18.8 16-11.6 12.1-8.7-14.9 0-19.8 0-6.1-18.8L352 400.4z" />
    </Icon>
);

export default UserPoliceTie;