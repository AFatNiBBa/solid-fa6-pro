
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-ring` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-ring?s=duotone bell-ring}
 * @preview ![bell-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bell-ring.svg)
 */
const BellRing: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 384c0 4.4 .9 8.9 2.8 13.1C40 408.6 51.4 416 64 416l384 0c12.6 0 24-7.4 29.2-18.9c1.9-4.2 2.8-8.7 2.8-13.1c0-7.7-2.8-15.3-8.1-21.3l-7.4-8.3C433.3 319.2 416 273.9 416 226.8l0-18.8c0-77.4-55-142-128-156.8L288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 19.2C151 66 96 130.6 96 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-5.3 6-8.1 13.6-8.1 21.3z" />
        <path d="M113.4 15.4c9.1 9.6 8.8 24.8-.8 33.9C72.8 87.3 48 140.7 48 200c0 13.3-10.7 24-24 24s-24-10.7-24-24C0 127.1 30.5 61.2 79.4 14.6c9.6-9.1 24.8-8.8 33.9 .8zM320 448c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3l64 0 64 0zM399.4 49.4c-9.6-9.1-10-24.3-.8-33.9s24.3-10 33.9-.8C481.5 61.2 512 127.1 512 200c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-59.3-24.8-112.7-64.6-150.6z" />
    </Icon>
);

export default BellRing;