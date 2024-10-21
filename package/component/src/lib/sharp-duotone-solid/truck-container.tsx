
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-container` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-container?s=sharp-duotone-solid truck-container}
 * @preview ![truck-container](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-container.svg)
 */
const TruckContainer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 272l400 0 0-240L0 32zM32 416a64 64 0 1 0 128 0A64 64 0 1 0 32 416zM64 72l32 0 0 160-32 0L64 72zm80 0l32 0 0 160-32 0 0-160zm48 344a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zM224 72l32 0 0 160-32 0 0-160zm80 0l32 0 0 160-32 0 0-160zM480 416a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M456 144l-24 0 0 24 0 88 0 32 0 16L0 304l0 80 5.5 0c13.2-37.3 48.7-64 90.5-64c33.4 0 62.8 17 80 42.9C193.2 337 222.6 320 256 320c41.8 0 77.4 26.7 90.5 64l85.5 0 21.5 0c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64l5.5 0 0-96 0-32 0-8.6-5.4-6.6-72-88-7.2-8.8L544 144l-88 0zM585 256l-105 0 0-64 52.6 0L585 256z" />
    </Icon>
);

export default TruckContainer;