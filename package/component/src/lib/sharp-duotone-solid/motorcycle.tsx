
import { Icon, generic } from "../../index";

/**
 * A component that renders the `motorcycle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/motorcycle?s=sharp-duotone-solid motorcycle}
 * @preview ![motorcycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/motorcycle.svg)
 */
const Motorcycle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352c0-70.7 57.3-128 128-128c62.5 0 114.5 44.8 125.8 104l-66.4 0c-9.5-23.5-32.5-40-59.3-40c-35.3 0-64 28.7-64 64s28.7 64 64 64c26.9 0 49.9-16.5 59.3-40l66.4 0C242.5 435.2 190.5 480 128 480C57.3 480 0 422.7 0 352zm384 0c0-40 18.4-75.7 47.1-99.2c10.5 19.5 21.1 38.9 31.6 58.4C453.5 322.3 448 336.5 448 352c0 35.3 28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64c-2.4 0-4.8 .1-7.1 .4c-10.5-19.5-21.1-39-31.6-58.4c12.2-3.9 25.2-6 38.7-6c70.7 0 128 57.3 128 128s-57.3 128-128 128s-128-57.3-128-128z" />
        <path d="M280 32l-24 0 0 48 24 0 57.7 0 16.4 30.3L256 192l-64-64L32 128l0 64 96 0c88.4 0 160 71.6 160 160c0 11-1.1 21.7-3.2 32l70.4 0c-2.1-10.3-3.2-21-3.2-32c0-52.2 25-98.6 63.7-127.8l75.2 139.2 42.2-22.8L418.2 128l93.8 0 0-96-64 0L391.7 78.9 373.1 44.6 366.3 32 352 32l-72 0zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Motorcycle;