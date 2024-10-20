
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-bolt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-bolt?s=duotone truck-bolt}
 * @preview ![truck-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-bolt.svg)
 */
const TruckBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 432a80 80 0 1 0 160 0A80 80 0 1 0 96 432zm16.8-266.9c2.2 6.5 8.3 10.9 15.2 10.9l54.1 0-36.4 72.8c-3.3 6.6-1.6 14.7 4.1 19.4s13.9 5 19.9 .5l128-96c5.5-4.1 7.8-11.3 5.6-17.9S294.9 144 288 144l-54.1 0 36.4-72.8c3.3-6.6 1.6-14.7-4.1-19.4s-13.9-5-19.9-.5l-128 96c-5.5 4.1-7.8 11.3-5.6 17.9zM384 432a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M0 48C0 21.5 21.5 0 48 0L368 0c26.5 0 48 21.5 48 48l0 48 50.7 0c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3l0 18.7 0 32 0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0-1.1 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96l-66.3 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96L48 416c-26.5 0-48-21.5-48-48L0 48zM416 256l128 0 0-18.7L466.7 160 416 160l0 96zM266.3 51.7c-5.7-4.8-13.9-5-19.9-.5l-128 96c-5.5 4.1-7.8 11.3-5.6 17.9s8.3 10.9 15.2 10.9l54.1 0-36.4 72.8c-3.3 6.6-1.6 14.7 4.1 19.4s13.9 5 19.9 .5l128-96c5.5-4.1 7.8-11.3 5.6-17.9S294.9 144 288 144l-54.1 0 36.4-72.8c3.3-6.6 1.6-14.7-4.1-19.4z" />
    </Icon>
);

export default TruckBolt;