
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vector-polygon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-polygon?s=sharp-duotone-solid vector-polygon}
 * @preview ![vector-polygon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vector-polygon.svg)
 */
const VectorPolygon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 160l0 192 64 0 0-192-64 0zm96-96l0 64 192 0 0-64L128 64zm0 320l0 64 192 0 0-64-192 0zM292.3 192l27.7 0c15.5 0 28.4 11 31.4 25.6l.6-1.1 27.8-48.6 4.5-7.9L320 160l0-16.5L292.3 192zm0 128L320 368.5l0-16.5 32 0 32.3 0-4.5-7.9L352 295.5l0 24.5-32 0-27.7 0z" />
        <path d="M128 32L0 32 0 160l128 0 0-128zM80 80l0 32-32 0 0-32 32 0zM448 32L320 32l0 128 128 0 0-128zM400 80l0 32-32 0 0-32 32 0zM0 352L0 480l128 0 0-128L0 352zm48 48l32 0 0 32-32 0 0-32zm400-48l-128 0 0 128 128 0 0-128zm-48 48l0 32-32 0 0-32 32 0zM224 192l0 128 128 0 0-128-128 0zm48 48l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default VectorPolygon;