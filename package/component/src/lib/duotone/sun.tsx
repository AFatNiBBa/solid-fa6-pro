
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sun` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun?s=duotone sun}
 * @preview ![sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sun.svg)
 */
const Sun: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 355.4c0 2.1 .4 4.2 1.2 6.1c2.1 5 6.6 8.6 11.9 9.6L121 391l19.8 107.9c1 5.3 4.6 9.8 9.6 11.9s10.7 1.5 15.2-1.6L256 446.9l90.3 62.3c4.5 3.1 10.2 3.7 15.2 1.6s8.6-6.6 9.6-11.9L391 391l107.9-19.8c5.3-1 9.8-4.6 11.9-9.6s1.5-10.7-1.6-15.2L446.9 256l62.3-90.3c3.1-4.5 3.7-10.2 1.6-15.2s-6.6-8.6-11.9-9.6L391 121 371.1 13.1c-1-5.3-4.6-9.8-9.6-11.9c-2-.8-4-1.2-6.1-1.2c-3.2 0-6.4 1-9.1 2.8L256 65.1 165.7 2.8c-4.5-3.1-10.2-3.7-15.2-1.6s-8.6 6.6-9.6 11.9L121 121 13.1 140.9c-5.3 1-9.8 4.6-11.9 9.6s-1.5 10.7 1.6 15.2L65.1 256 2.8 346.3C1 349 0 352.2 0 355.4zM384 256a128 128 0 1 1 -256 0 128 128 0 1 1 256 0z" />
        <path d="M256 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192z" />
    </Icon>
);

export default Sun;