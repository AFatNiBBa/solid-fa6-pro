
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mask-face` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask-face?s=sharp-duotone-solid mask-face}
 * @preview ![mask-face](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mask-face.svg)
 */
const MaskFace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128l0 24L0 344l0 18.7 18.2 4.5 180.7 45.2c-26.6-17.1-49.3-39.7-66.5-66.1L48 325.3 48 176l48 0 0-16 0-32-72 0L0 128zM441.1 412.5l180.7-45.2 18.2-4.5 0-18.7 0-192 0-24-24 0-72 0 0 32 0 16 48 0 0 149.3-84.3 21.1c-17.3 26.4-40 49-66.5 66.1z" />
        <path d="M304 64l-9.7 0-8.1 5.4L198.3 128 128 128l-32 0 0 32 0 64c0 123.7 100.3 224 224 224s224-100.3 224-224l0-64 0-32-32 0-70.3 0L353.8 69.4 345.7 64 336 64l-32 0zM422.3 192l9.7 0 16 0 0 32-16 0-224 0-16 0 0-32 16 0 9.7 0 204.6 0zM192 256l16 0 224 0 16 0 0 32-16 0-224 0-16 0 0-32zm32 64l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32z" />
    </Icon>
);

export default MaskFace;