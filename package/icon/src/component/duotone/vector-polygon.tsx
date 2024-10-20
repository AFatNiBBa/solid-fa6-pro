
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vector-polygon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-polygon?s=duotone vector-polygon}
 * @preview ![vector-polygon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/vector-polygon.svg)
 */
const VectorPolygon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 160l0 192 64 0 0-192-64 0zm96-96l0 64 192 0 0-64L128 64zm0 320l0 64 192 0 0-64-192 0zM292.3 192l27.7 0c.5 0 1 0 1.4 0s1 .1 1.4 .1c.9 .1 1.9 .2 2.8 .4c1.8 .3 3.6 .8 5.3 1.4c3.4 1.3 6.6 3.1 9.4 5.4c5.5 4.6 9.5 11 11 18.3l28.4-49.7 4.5-7.9L352 160c-.8 0-1.7 0-2.5-.1s-1.7-.2-2.5-.3c-1.6-.3-3.2-.6-4.7-1.1c-3.1-1-5.9-2.4-8.5-4.2c-5.2-3.6-9.2-8.7-11.6-14.6L292.3 192zm0 128l29.9 52.3c4.7-11.9 16.3-20.3 29.8-20.3l32.3 0-4.5-7.9-28.4-49.7C348.4 309 335.5 320 320 320l-27.7 0z" />
        <path d="M32 32C14.3 32 0 46.3 0 64l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L32 32zM80 80l0 32-32 0 0-32 32 0zM352 32c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0zm48 48l0 32-32 0 0-32 32 0zM0 384l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zm48 16l32 0 0 32-32 0 0-32zm304-48c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0zm48 48l0 32-32 0 0-32 32 0zM224 224l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zm48 16l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default VectorPolygon;