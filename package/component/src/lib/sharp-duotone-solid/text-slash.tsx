
import { Icon, generic } from "../../index";

/**
 * A component that renders the `text-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-slash?s=sharp-duotone-solid text-slash}
 * @preview ![text-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/text-slash.svg)
 */
const TextSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M151.3 94.7c18.4 14.3 36.8 28.6 55.2 42.9l.5-1.9L217 96l116.7 0L301.2 211.1c18.2 14.1 36.4 28.2 54.5 42.3L400.2 96 503 96 497 120.2 487 160l66 0 6.1-24.2 16-64L585 32l-41 0L192 32l-25 0L161 56.2l-9.6 38.5zM160 416l0 64 32 0 160 0 32 0 0-64-32 0-42.2 0 17.6-62.1L272.9 311 243.3 416 192 416l-32 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default TextSlash;