
import { Icon, generic } from "../../index";

/**
 * A component that renders the `link-horizontal-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-horizontal-slash?s=sharp-duotone-solid link-horizontal-slash}
 * @preview ![link-horizontal-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/link-horizontal-slash.svg)
 */
const LinkHorizontalSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 208c0 79.5 64.5 144 144 144l16 0 0-64-16 0c-44.2 0-80-35.8-80-80c0-18.3 6.1-35.1 16.5-48.6L30.2 119.8C11.3 144.2 0 174.8 0 208zM115.4 66.8L194.2 128 304 128c44.2 0 80 35.8 80 80c0 20-7.3 38.2-19.4 52.3c16.9 13.1 33.7 26.2 50.6 39.3C435.7 274.7 448 242.8 448 208c0-79.5-64.5-144-144-144L144 64c-9.8 0-19.3 1-28.6 2.8zM192 304c0 79.5 64.5 144 144 144l110.8 0-81.2-64L336 384c-44.2 0-80-35.8-80-80c0-2.1 .1-4.1 .2-6.1l-55.4-43.6c-5.7 15.5-8.8 32.3-8.8 49.8zM480 160l0 64 16 0c44.2 0 80 35.8 80 80c0 36-23.8 66.5-56.6 76.5c18.7 14.5 37.4 29 56.1 43.5C614.4 398.3 640 354.1 640 304c0-79.5-64.5-144-144-144l-16 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default LinkHorizontalSlash;