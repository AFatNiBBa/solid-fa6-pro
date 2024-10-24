
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mill-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mill-sign?s=sharp-duotone-solid mill-sign}
 * @preview ![mill-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mill-sign.svg)
 */
const MillSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M81.9 469.2l60.3 21.5 17.9-50 0-24.7 0-165.5L81.9 469.2zM208 116.1C226.1 103.4 248.2 96 272 96c2 0 3.8 .1 5.6 .1s3.5 .2 5.3 .4c6.4-17.9 12.8-35.8 19.2-53.8L241.9 21.2 208 116.1zM224 208l0 53.5 35.7-100C239.1 167 224 185.7 224 208z" />
        <path d="M112 160c-26.5 0-48 21.5-48 48l0 208 0 32L0 448l0-32L0 208 0 96l64 0 0 10.8C78.5 99.9 94.8 96 112 96c31.3 0 59.7 12.9 80 33.6C212.3 108.9 240.7 96 272 96c61.9 0 112 50.1 112 112l0 208 0 32-64 0 0-32 0-208c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 208 0 32-64 0 0-32 0-208c0-26.5-21.5-48-48-48z" />
    </Icon>
);

export default MillSign;