
import { Icon, generic } from "../../index";

/**
 * A component that renders the `floppy-disk-pen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk-pen?s=duotone floppy-disk-pen}
 * @preview ![floppy-disk-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/floppy-disk-pen.svg)
 */
const FloppyDiskPen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l242.7 0c17 0 33.3 6.7 45.3 18.7L429.3 128c12 12 18.7 28.3 18.7 45.3l0 62.4L289.3 394.3c-8.2 8.2-14 18.5-16.8 29.7l-14 55.9L64 480c-35.3 0-64-28.7-64-64L0 96zm64 32l0 64c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32zm96 224a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M493.2 235.8l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4c-15.6-15.6-40.9-15.6-56.6 0zm-52 52L311.9 417.1c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L512.1 358.8l-71-71z" />
    </Icon>
);

export default FloppyDiskPen;