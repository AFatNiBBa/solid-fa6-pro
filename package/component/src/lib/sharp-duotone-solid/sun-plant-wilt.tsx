
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sun-plant-wilt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-plant-wilt?s=sharp-duotone-solid sun-plant-wilt}
 * @preview ![sun-plant-wilt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sun-plant-wilt.svg)
 */
const SunPlantWilt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160l76.9 34.4L46.9 273.1l78.7-30.1L160 320l34.4-76.9 78.7 30.1-30.1-78.7L320 160l-76.9-34.4 30.1-78.7L194.4 76.9 160 0 125.6 76.9 46.9 46.9l30.1 78.7L0 160zm224 0A64 64 0 1 1 96 160a64 64 0 1 1 128 0zm-96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M536 144c-17.7 0-32 14.3-32 32l0 96 0 8 0 168 104 0 32 0 0 64-32 0L32 512 0 512l0-64 32 0 424 0 0-168 0-8c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 21.4c14.8 7.7 24 23.1 24 44.6c0 19.3-21.5 52.9-48 78c-26.5-25-48-58.4-48-78c0-21.5 9.2-37 24-44.6l0-21.4c0-44.2 35.8-80 80-80c11.4 0 22.2 2.4 32 6.7l0-22.7c0-44.2 35.8-80 80-80s80 35.8 80 80l0 53.4c14.8 7.7 24 23.1 24 44.6c0 19.3-21.5 52.9-48 78c-26.5-25-48-58.4-48-78c0-21.5 9.2-37 24-44.6l0-53.4c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default SunPlantWilt;