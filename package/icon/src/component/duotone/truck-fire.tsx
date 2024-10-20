
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-fire` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-fire?s=duotone truck-fire}
 * @preview ![truck-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-fire.svg)
 */
const TruckFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 24C0 37.3 10.7 48 24 48l8 0 0 50.7C37 97 42.4 96 48 96l32 0 0-48 56 0 0 48 48 0 0-48 48 0 0 48 48 0 0-48 56 0 0 48 48 0 0-48 232 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 0C10.7 0 0 10.7 0 24zM80 432a80 80 0 1 0 160 0A80 80 0 1 0 80 432zm320 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M496 96c0-17.7 14.3-32 32-32s32 14.3 32 32l16 0c35.3 0 64 28.7 64 64l0 96 0 112c0 26.5-21.5 48-48 48l-1.1 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96l-98.3 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96L48 416c-26.5 0-48-21.5-48-48L0 256l400 0 16 0 0-16 0-144 32 0 48 0zM384 96l0 128L0 224l0-80c0-26.5 21.5-48 48-48l336 0zM576 256l0-96-96 0 0 96 96 0z" />
    </Icon>
);

export default TruckFire;