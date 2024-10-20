
import { Icon, generic } from "../../index";

/**
 * A component that renders the `horse-head` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/horse-head?s=sharp-duotone-solid horse-head}
 * @preview ![horse-head](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/horse-head.svg)
 */
const HorseHead: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M203.3 298.2l8 13.8c24 41.5 68.3 70 119.3 71.9l-23.8-35.8c-28.9-7.8-53.1-26.8-67.8-52.2c-2.7-4.6-5.3-9.2-8-13.8c-9.2 5.3-18.5 10.7-27.7 16z" />
        <path d="M64 512l0-192.8c0-109.5 69.7-207 173.4-242.3L416 16l32 48L400 96l104 64 72 192-64 64-80 0-58.6-70.4c-11.6 4.1-24.1 6.4-37.2 6.4l-.2 0s0 0 0 0c-6.3 0-12.5-.5-18.6-1.5c-3.6-.6-7.2-1.4-10.7-2.3c0 0 0 0 0 0c-28.9-7.8-53.1-26.8-67.8-52.2l-8-13.8-27.7 16 8 13.8c24 41.5 68.3 70 119.3 71.9L416 512 64 512zM392 224a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default HorseHead;