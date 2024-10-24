
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brake-warning` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brake-warning?s=sharp-duotone-solid brake-warning}
 * @preview ![brake-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/brake-warning.svg)
 */
const BrakeWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 256a224 224 0 1 0 448 0A224 224 0 1 0 96 256zM296 128c16 0 32 0 48 0l0 24 0 112 0 24c-16 0-32 0-48 0l0-24 0-112 0-24zm0 192l48 0 0 48-48 0 0-48z" />
        <path d="M91.1 109l13-20.2-40.4-26L50.7 83C18.6 132.9 0 192.3 0 256s18.6 123.1 50.7 173l13 20.2 40.4-26L91.1 403C63.8 360.6 48 310.2 48 256s15.8-104.6 43.1-147zM589.3 83l-13-20.2-40.4 26 13 20.2c27.3 42.4 43.1 92.8 43.1 147s-15.8 104.6-43.1 147l-13 20.2 40.4 26 13-20.2C621.4 379.1 640 319.7 640 256s-18.6-123.1-50.7-173zM344 128l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM296 320l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default BrakeWarning;