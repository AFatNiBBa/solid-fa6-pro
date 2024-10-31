
import { Icon } from "../../index";

/**
 * A component that renders the `merge` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/merge?s=solid merge}
 * @preview ![merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/merge.svg)
 */
const Merge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l97.2 0c9.7 0 18.9 4.4 25 12L247 256 154.2 372c-6.1 7.6-15.3 12-25 12L32 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l97.2 0c29.2 0 56.7-13.3 75-36l99.2-124 80.6 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c6-6 9.4-14.1 9.4-22.6s-3.4-16.6-9.4-22.6l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 32-80.6 0L204.2 100c-18.2-22.8-45.8-36-75-36L32 64z" />
    </Icon>
);

export default Merge;