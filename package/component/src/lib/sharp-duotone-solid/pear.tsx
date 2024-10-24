
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pear` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pear?s=sharp-duotone-solid pear}
 * @preview ![pear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pear.svg)
 */
const Pear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320C0 426 86 512 192 512s192-86 192-192c0-3.6-.1-7.1-.3-10.7l58.8-58.8c44.2-44.2 49.3-112.6 15.4-162.5c-8.3 8.3-16.6 16.6-24.9 24.9c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9c5.7-5.7 11.3-11.3 17-17c8.3-8.3 16.6-16.6 24.9-24.9C402.3 39.4 377.2 32 352 32c-32.8 0-65.5 12.5-90.5 37.5l-58.8 58.8c-3.5-.2-7.1-.3-10.7-.3C86 128 0 214 0 320zm192 96c53 0 96-43 96-96l32 0c0 70.7-57.3 128-128 128l0-32z" />
        <path d="M510.7 35.2l-17 17L433 113l-17 17L382.1 96l17-17 60.8-60.8 17-17 33.9 33.9z" />
    </Icon>
);

export default Pear;