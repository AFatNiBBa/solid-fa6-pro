
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plate-utensils` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plate-utensils?s=duotone plate-utensils}
 * @preview ![plate-utensils](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/plate-utensils.svg)
 */
const PlateUtensils: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M152 266.8l0 116.9C192.5 441.9 259.8 480 336 480c89.4 0 166.6-52.4 202.6-128.2c-23.9-2-44-17.2-53.2-38.2C462.2 373.5 404.1 416 336 416c-88.4 0-160-71.6-160-160l0-.6c-7.4 4.8-15.5 8.6-24 11.4zM204.9 74.3l16.3 69.2c.1 .3 .1 .5 .2 .8C250.5 114.5 291.1 96 336 96c63.3 0 118.1 36.8 144 90.2l0-26.2c0-25 4.3-46.7 11.3-65.5C451 55.8 396.3 32 336 32c-48.9 0-94.2 15.7-131.1 42.3zM208 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0z" />
        <path d="M48 23.5c-.2-4-3.3-7.2-7.3-7.5s-7.6 2.3-8.5 6.1L1.9 150.9C.6 156.3 0 161.9 0 167.5c0 39.9 32.2 72.2 72 72.5l0 232c0 13.3 10.7 24 24 24s24-10.7 24-24l0-232c39.8-.3 72-32.6 72-72.5c0-5.6-.6-11.2-1.9-16.6L159.8 22.2c-.9-3.9-4.5-6.5-8.5-6.1s-7.1 3.5-7.3 7.5L136.5 152l-17.3 0L103.9 23.1c-.5-4-3.9-7.1-7.9-7.1s-7.5 3-7.9 7.1L72.9 152l-17.3 0L48 23.5zM512 160l0 128c0 17.7 14.3 32 32 32l48 0 0 152c0 13.3 10.7 24 24 24s24-10.7 24-24l0-152 0-104 0-179.1c0-11.5-9.3-20.9-20.9-20.9c-2.1 0-4.1 .3-6.1 1C596.2 23.2 512 59.2 512 160z" />
    </Icon>
);

export default PlateUtensils;