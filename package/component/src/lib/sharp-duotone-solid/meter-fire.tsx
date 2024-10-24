
import { Icon, generic } from "../../index";

/**
 * A component that renders the `meter-fire` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-fire?s=sharp-duotone-solid meter-fire}
 * @preview ![meter-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/meter-fire.svg)
 */
const MeterFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c33.5 0 65.5-6.4 94.8-18.1c-38.6-35.1-62.8-85.7-62.8-142c0-49.2 20.9-93.1 46.1-127.8L320 224l0-32 0-32 0-32 64 0 0 32 0 8.8c17.1-15.5 33.7-27.8 47-36.1l21.6-13.5L493.4 160C455.4 66.2 363.4 0 256 0C114.6 0 0 114.6 0 256zM128 128l64 0 0 32 0 32 0 32-64 0 0-32 0-32 0-32zm96 0l64 0 0 32 0 32 0 32-64 0 0-32 0-32 0-32zM400 369.8c0 49 36 78 81 78c18 0 34-5 49-15c19.3-13.5 29.5-35.8 29.5-58.7c0-12.7-3.1-25.6-9.5-37.3c-2-4-4-8-7-12l-36 42s-58-74-62-79c-30 37-45 58-45 82z" />
        <path d="M448 160s32.6 26.4 65 64c17.2-19.5 31-32 31-32s96 86.4 96 160c0 88.4-71.6 160-160 160s-160-71.6-160-160s128-192 128-192zm33 287.8c18 0 34-5 49-15c30-21 38-63 20-96c-2-4-4-8-7-12l-36 42s-58-74-62-79c-30 37-45 58-45 82c0 49 36 78 81 78z" />
    </Icon>
);

export default MeterFire;