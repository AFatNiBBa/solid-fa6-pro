
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-injured` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-injured?s=duotone user-injured}
 * @preview ![user-injured](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-injured.svg)
 */
const UserInjured: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 482.3C0 498.7 13.3 512 29.7 512L64 512l0-166.6C24.9 378.1 0 427.3 0 482.3zM96 128c0 70.7 57.3 128 128 128s128-57.3 128-128c0-11-1.4-21.8-4-32L222.6 96l-52.1 0L100 96c-2.6 10.2-4 21-4 32zm44.1 180.1c15.2 25.3 30.4 50.6 45.5 75.9l86.4 0c44.2 0 80 35.8 80 80c0 18-6 34.6-16 48l82.3 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0c-13.1 0-25.9 1.4-38.2 4.1zM204.8 416l57.6 96 9.6 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-67.2 0z" />
        <path d="M348 96c-6.7-25.9-21.3-48.7-41.1-65.5L222.6 96 348 96zM224 0C164.4 0 114.2 40.8 100 96l70.5 0L278.4 12.1C261.9 4.3 243.4 0 224 0zm38.4 512L140.1 308.1c-28.5 6.2-54.5 19.3-76.1 37.3L64 512l198.4 0z" />
    </Icon>
);

export default UserInjured;