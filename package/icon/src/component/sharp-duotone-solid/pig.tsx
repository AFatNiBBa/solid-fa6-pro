
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pig` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pig?s=sharp-duotone-solid pig}
 * @preview ![pig](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pig.svg)
 */
const Pig: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80 240l0 16c0 54.5 30.3 102 75 126.4L182.9 480l89.1 0 0-64 48 0 64 0 0 64 89.1 0 19.6-68.7c30.1-7.1 57.6-22.1 79.8-43.3l67.5 0 0-144-32 0-5.8-2.9C585 212.5 570 200 558.4 184.6l-6.8-9c31.7-3.8 56.3-30.8 56.3-63.5l0-32-16 0-40 0c-.6 24.8-11.4 47.5-29 63.3c-5.9-5.6-12.2-10.8-18.6-15.7C519 115.8 528 97.8 528 78l0-46L453.1 46c-21.7 4.1-39.2 18.7-47.7 37.9c-14.1-2.6-28.5-4-43.1-4L240 80C162.6 80 98 135 83.2 208c-2.1 10.3-3.2 21-3.2 32zm408-4a20 20 0 1 1 -40 0 20 20 0 1 1 40 0z" />
        <path d="M80 240c0-11 1.1-21.7 3.2-32l-35.8 0c-8.5 0-15.4-6.9-15.4-15.4c0-7.1 4.8-13.3 11.7-15l8.2-2-7.8-31-8.2 2C14.8 151.8 0 170.8 0 192.6C0 218.8 21.2 240 47.4 240L80 240zm388 16a20 20 0 1 0 0-40 20 20 0 1 0 0 40z" />
    </Icon>
);

export default Pig;