
import { Icon, generic } from "../../index";

/**
 * A component that renders the `floppy-disk-circle-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk-circle-xmark?s=duotone floppy-disk-circle-xmark}
 * @preview ![floppy-disk-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/floppy-disk-circle-xmark.svg)
 */
const FloppyDiskCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l242.7 0c17 0 33.3 6.7 45.3 18.7L429.3 128c12 12 18.7 28.3 18.7 45.3l0 19.5c-5.3-.5-10.6-.7-16-.7c-75 0-139.1 47-164.4 113.1C256.1 294.5 240.8 288 224 288c-35.3 0-64 28.7-64 64s28.7 64 64 64c13.3 0 25.7-4.1 35.9-11c6 28.1 18.7 53.7 36.3 75L64 480c-35.3 0-64-28.7-64-64L0 96zm64 32l0 64c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm203.3-59.3c-6.2-6.2-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6z" />
    </Icon>
);

export default FloppyDiskCircleXmark;