
import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side-gear` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-gear?s=sharp-duotone-solid head-side-gear}
 * @preview ![head-side-gear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/head-side-gear.svg)
 */
const HeadSideGear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224.3c0 58.7 23 115 64 156.9L64 480l0 32 32 0 192 0 32 0 0-32 0-32 96 0 32 0 0-32 0-96 32 0 32 0 0-32 0-16 0-11.2-7-8.8-57.3-71.7C441.6 79.7 358.1 0 256 0L224.3 0C100.4 0 0 100.4 0 224.3zm97.1-36.6l32-55.4L161.6 151c8.9-7.6 19.1-13.6 30.4-17.6L192 96l64 0 0 37.5c11.2 4 21.5 10 30.4 17.6l32.5-18.7 32 55.4-32.5 18.7c1.1 5.7 1.6 11.6 1.6 17.6s-.5 11.9-1.6 17.5l32.5 18.7-32 55.4c-10.8-6.2-21.6-12.5-32.5-18.7c-8.9 7.6-19.2 13.6-30.4 17.6l0 37.5-64 0 0-37.5c-11.2-4-21.5-10-30.4-17.6l-32.5 18.7-32-55.4 32.5-18.7c-1.1-5.7-1.6-11.6-1.6-17.5s.5-11.9 1.6-17.6L97.1 187.7z" />
        <path d="M192 96l64 0 0 37.5c11.2 4 21.5 10 30.4 17.6l32.5-18.7 32 55.4-32.5 18.7c1.1 5.7 1.6 11.6 1.6 17.6s-.5 11.9-1.6 17.5l32.5 18.7-32 55.4L286.4 297c-8.9 7.6-19.2 13.6-30.4 17.6l0 37.5-64 0 0-37.5c-11.2-4-21.5-10-30.4-17.6l-32.5 18.7-32-55.4 32.5-18.7c-1.1-5.7-1.6-11.6-1.6-17.5s.5-11.9 1.6-17.6L97.1 187.7l32-55.4L161.6 151c8.9-7.6 19.1-13.6 30.4-17.6L192 96zm32 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default HeadSideGear;