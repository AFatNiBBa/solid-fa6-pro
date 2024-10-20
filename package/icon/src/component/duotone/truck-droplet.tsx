
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-droplet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-droplet?s=duotone truck-droplet}
 * @preview ![truck-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-droplet.svg)
 */
const TruckDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 432a80 80 0 1 0 160 0A80 80 0 1 0 96 432zm40-242c0 36.5 32.2 66 72 66s72-29.6 72-66c0-27-39.4-82.9-59.9-110.3c-3.1-4.1-7.6-6.1-12.1-6.1s-9.1 2-12.1 6.1C175.4 107 136 163 136 190zM384 432a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M0 48C0 21.5 21.5 0 48 0L368 0c26.5 0 48 21.5 48 48l0 48 50.7 0c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3l0 18.7 0 32 0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0-1.1 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96l-66.3 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96L48 416c-26.5 0-48-21.5-48-48L0 48zM416 256l128 0 0-18.7L466.7 160 416 160l0 96zm-208 0c39.8 0 72-29.6 72-66c0-27-39.4-82.9-59.9-110.3c-6.1-8.2-18.1-8.2-24.2 0C175.4 107 136 163 136 190c0 36.5 32.2 66 72 66z" />
    </Icon>
);

export default TruckDroplet;