
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brake-warning` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brake-warning?s=duotone brake-warning}
 * @preview ![brake-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/brake-warning.svg)
 */
const BrakeWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 256a224 224 0 1 0 448 0A224 224 0 1 0 96 256zm256 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM296 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112z" />
        <path d="M91.1 109c7.2-11.1 4-26-7.2-33.2s-26-4-33.2 7.2C18.6 132.9 0 192.3 0 256s18.6 123.1 50.7 173c7.2 11.1 22 14.4 33.2 7.2s14.4-22 7.2-33.2C63.8 360.6 48 310.2 48 256s15.8-104.6 43.1-147zM589.3 83c-7.2-11.1-22-14.4-33.2-7.2s-14.4 22-7.2 33.2c27.3 42.4 43.1 92.8 43.1 147s-15.8 104.6-43.1 147c-7.2 11.1-4 26 7.2 33.2s26 4 33.2-7.2C621.4 379.1 640 319.7 640 256s-18.6-123.1-50.7-173zM320 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default BrakeWarning;