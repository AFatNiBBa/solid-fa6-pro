
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-field-un` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-field-un?s=sharp-duotone-solid truck-field-un}
 * @preview ![truck-field-un](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-field-un.svg)
 */
const TruckFieldUn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 400a80 80 0 1 0 160 0A80 80 0 1 0 96 400zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M384 32L32 32l0 96L0 128 0 288l32 0 0 32L0 320l0 64 32 0 33.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l66.3 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l33.1 0 32 0 0-64-32 0 0-96-68.1 0L477.2 83l-8.4-19L448 64l-64 0 0-32zm0 96l43.2 0 42.7 96L384 224l0-96zM128 144l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64 0-16 32 0 0 16 0 64c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-64 0-16 32 0 0 16zm112-16l8 0 9.9 0 4.4 8.8L288 188.2l0-44.2 0-16 32 0 0 16 0 96 0 16-16 0-8 0-9.9 0-4.4-8.8L256 195.8l0 44.2 0 16-32 0 0-16 0-96 0-16 16 0z" />
    </Icon>
);

export default TruckFieldUn;