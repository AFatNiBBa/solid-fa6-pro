
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-fire` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-fire?s=sharp-duotone-solid truck-fire}
 * @preview ![truck-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-fire.svg)
 */
const TruckFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 48l32 0 0 48 48 0 0-48 56 0 0 48 48 0 0-48 48 0 0 48 48 0 0-48 56 0 0 48 48 0 0-48 256 0 0-48L0 0zM80 432a80 80 0 1 0 160 0A80 80 0 1 0 80 432zm320 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M496 96c0-17.7 14.3-32 32-32s32 14.3 32 32l48 0 32 0 0 32 0 128 0 160-49.1 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96l-98.3 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96L0 416 0 256l400 0 16 0 0-16 0-144 32 0 48 0zM384 96l0 128L0 224 0 96l384 0zM576 256l0-96-96 0 0 96 96 0z" />
    </Icon>
);

export default TruckFire;