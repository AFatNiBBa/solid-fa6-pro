
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pear` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pear?s=duotone pear}
 * @preview ![pear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pear.svg)
 */
const Pear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320c0 49.1 18.7 98.3 56.2 135.8c75 75 196.5 75 271.5 0c25.1-25.1 41.8-55.3 50.1-87.3c11.8-45.7 43.4-90.9 73.3-127.4c18-22.1 28.9-50.3 28.9-81c0-26.7-8.2-51.4-22.1-71.9C446.9 99 435.9 110 425 121c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7s-7-10.8-7-17s2.3-12.3 7-17c11-11 21.9-21.9 32.9-32.9C403.4 40.2 378.7 32 352 32c-30.7 0-58.9 10.8-81 28.9c-36.5 29.9-81.8 61.4-127.4 73.3c-32 8.3-62.3 25-87.3 50.1C18.7 221.7 0 270.9 0 320zM176 432c0-8.8 7.2-16 16-16c53 0 96-43 96-96c0-8.8 7.2-16 16-16s16 7.2 16 16c0 70.7-57.3 128-128 128c-8.8 0-16-7.2-16-16z" />
        <path d="M505 7c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L471 7c9.4-9.4 24.6-9.4 33.9 0z" />
    </Icon>
);

export default Pear;