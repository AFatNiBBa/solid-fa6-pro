
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-arrow-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-arrow-right?s=sharp-duotone-solid truck-arrow-right}
 * @preview ![truck-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-arrow-right.svg)
 */
const TruckArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M72 152l0 48 24 0 166.1 0-39 39-17 17L240 289.9l17-17 80-80 17-17-17-17L257 79l-17-17L206.1 96l17 17 39 39L96 152l-24 0zM96 432a80 80 0 1 0 160 0A80 80 0 1 0 96 432zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M0 0L416 0l0 96 64 0 13.3 0 9.4 9.4 96 96 9.4 9.4 0 13.3 0 32 0 32 0 64 32 0 0 64-32 0-32 0-1.1 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96l-66.3 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96L0 416 0 0zM416 256l128 0 0-18.7L466.7 160 416 160l0 96zM257 79l-17-17L206.1 96l17 17 39 39L96 152l-24 0 0 48 24 0 166.1 0-39 39-17 17L240 289.9l17-17 80-80 17-17-17-17L257 79z" />
    </Icon>
);

export default TruckArrowRight;