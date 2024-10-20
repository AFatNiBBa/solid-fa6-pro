
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-tow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-tow?s=sharp-duotone-solid truck-tow}
 * @preview ![truck-tow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-tow.svg)
 */
const TruckTow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144l0 16 0 16c0 26.5 21.5 48 48 48l16 0 0-2.7c18.6-6.6 32-24.4 32-45.3L96 64l96 192 192 0L160 0 64 0l0 16 0 16 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16 0-16L0 144zM96 432a80 80 0 1 0 160 0A80 80 0 1 0 96 432zm320 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M416 96l-32 0 0 32 0 128L0 256 0 416l65.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l97.1 0 1.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l33.1 0 0-128 0-32 0-32 0-13.3-9.4-9.4-96-96L525.3 96 512 96l-96 0zM576 256l-128 0 0-96 50.7 0L576 237.3l0 18.7z" />
    </Icon>
);

export default TruckTow;