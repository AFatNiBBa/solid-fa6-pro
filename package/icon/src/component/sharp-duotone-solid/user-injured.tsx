
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-injured` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-injured?s=sharp-duotone-solid user-injured}
 * @preview ![user-injured](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-injured.svg)
 */
const UserInjured: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 512l64 0 0-208L0 512zM96 128c0 70.7 57.3 128 128 128s128-57.3 128-128c0-11-1.4-21.8-4-32L222.6 96l-52.1 0L100 96c-2.6 10.2-4 21-4 32zm41.6 176l48 80L336 384l16 0 0 16 0 112 96 0L384 304l-246.4 0zm67.2 112c19.2 32 38.4 64 57.6 96l57.6 0 0-96-115.2 0z" />
        <path d="M348 96c-6.7-25.9-21.3-48.7-41.1-65.5L222.6 96 348 96zM224 0C164.4 0 114.2 40.8 100 96l70.5 0L278.4 12.1C261.9 4.3 243.4 0 224 0zm38.4 512L137.6 304 64 304l0 208 198.4 0z" />
    </Icon>
);

export default UserInjured;