
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-utensils` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-utensils?s=sharp-duotone-solid truck-utensils}
 * @preview ![truck-utensils](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-utensils.svg)
 */
const TruckUtensils: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 432a80 80 0 1 0 160 0A80 80 0 1 0 96 432zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M0 0L416 0l0 96 64 0 13.3 0 9.4 9.4 96 96 9.4 9.4 0 13.3 0 32 0 32 0 64 32 0 0 64-32 0-32 0-1.1 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96l-66.3 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96L0 416 0 0zM416 256l128 0 0-18.7L466.7 160 416 160l0 96zM81.2 151.7c-.8 4.8-1.2 9.6-1.2 14.5c0 27.9 21 50.9 48 54.2l0 51.6 0 16 32 0 0-16 0-51.6c27-3.2 48-26.3 48-54.2c0-4.9-.4-9.7-1.2-14.5L192 64l-16 0-5.3 94.9-10.7 0L152 64l-16 0-8 94.9-10.7 0L112 64 96 64 81.2 151.7zM320 112l0-48-12 0s-52 20.2-52 90.9l0 69 32 0 0 80 0 16 32 0 0-16 0-80 0-96 0-16z" />
    </Icon>
);

export default TruckUtensils;