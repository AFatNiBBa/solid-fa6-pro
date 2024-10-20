
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bone-break` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bone-break?s=sharp-duotone-solid bone-break}
 * @preview ![bone-break](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bone-break.svg)
 */
const BoneBreak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 272c0 38.6 27.3 70.8 63.7 78.3L66.8 366C45.8 380.4 32 404.6 32 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-7.6-1-14.9-3-21.8L320 384 288 224 157 250.2c-9.5-33.6-40.4-58.2-77-58.2c-44.2 0-80 35.8-80 80zM320 384l131 26.2c-2 6.9-3 14.2-3 21.8c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.4-13.8-51.6-34.8-66l3.1-15.7c36.3-7.5 63.7-39.7 63.7-78.3c0-44.2-35.8-80-80-80c-36.6 0-67.5 24.6-77 58.2L352 224 320 384z" />
        <path d="M344 8l0 24 0 72 0 24-48 0 0-24 0-72 0-24 48 0zM184 54.1l17 17 48 48 17 17L232 169.9l-17-17-48-48-17-17L184 54.1zM489.9 88l-17 17-48 48-17 17L374.1 136l17-17 48-48 17-17L489.9 88z" />
    </Icon>
);

export default BoneBreak;