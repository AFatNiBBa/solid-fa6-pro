
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-moving` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-moving?s=sharp-duotone-solid truck-moving}
 * @preview ![truck-moving](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-moving.svg)
 */
const TruckMoving: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 416a64 64 0 1 0 128 0A64 64 0 1 0 32 416zm160 0a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm288 0a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M480 32L0 32 0 384l5.5 0c13.2-37.3 48.7-64 90.5-64c33.4 0 62.8 17 80 42.9C193.2 337 222.6 320 256 320c41.8 0 77.4 26.7 90.5 64l69.5 0 37.5 0c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64l5.5 0 0-96 0-32 0-8.6-5.4-6.6-72-88-7.2-8.8L544 144l-64 0 0-112zM585 256l-105 0 0-64 52.6 0L585 256z" />
    </Icon>
);

export default TruckMoving;