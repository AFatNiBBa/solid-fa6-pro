
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wheat-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wheat-slash?s=sharp-duotone-solid wheat-slash}
 * @preview ![wheat-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wheat-slash.svg)
 */
const WheatSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M66.7 464l22.6-22.6 52.9-52.9L131.9 378c-37.5-37.5-37.5-98.3 0-135.8l22.6-22.6 22.6 22.6c21 21 33.2 47.5 36.5 74.8l29.5-29.5 50.6 39.9-36.3 36.3c28.5 2.8 56.2 15.1 78.1 36.9l22.6 22.6-22.6 22.6c-37.5 37.5-98.3 37.5-135.8 0l-12.2-12.2-52.9 52.9L112 509.3 66.7 464zM224.3 151.4c2.8-3.8 6-7.5 9.4-10.9l22.6-22.6L279 140.5c21 21 33.2 47.5 36.5 74.8l30.5-30.5-10.4-10.4c-37.5-37.5-37.5-98.3 0-135.8L358.2 16l22.6 22.6c34.1 34.1 44.9 82.6 32.5 125.9c43.3-12.4 91.8-1.5 125.9 32.5l22.6 22.6-22.6 22.6c-37.5 37.5-98.3 37.5-135.8 0l-12.2-12.2-28.6 28.6c-46.1-35.8-92.2-71.6-138.3-107.3zM448 88c0-48.6 39.4-88 88-88l40 0 0 40c0 48.6-39.4 88-88 88l-40 0 0-40z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default WheatSlash;