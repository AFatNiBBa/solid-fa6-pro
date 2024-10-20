
import { Icon, generic } from "../../index";

/**
 * A component that renders the `merge` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/merge?s=duotone merge}
 * @preview ![merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/merge.svg)
 */
const Merge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416c0 17.7 14.3 32 32 32l97.2 0c29.2 0 56.7-13.3 75-36l99.2-124c5.1 0 10.3 0 15.4 0c-27.4 0-53.5-11.7-71.7-32L154.2 372c-6.1 7.6-15.3 12-25 12L32 384c-17.7 0-32 14.3-32 32zM243.8 252c1.1 1.3 2.2 2.6 3.2 4c-1.1-1.3-2.1-2.7-3.2-4z" />
        <path d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l97.2 0c9.7 0 18.9 4.4 25 12l89.6 112c18.2 22.8 45.8 36 75 36l65.2 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c6-6 9.4-14.1 9.4-22.6s-3.4-16.6-9.4-22.6l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 32-65.2 0c-9.7 0-18.9-4.4-25-12L204.2 100c-18.2-22.8-45.8-36-75-36L32 64z" />
    </Icon>
);

export default Merge;