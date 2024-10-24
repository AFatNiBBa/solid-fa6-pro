
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mask-face` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask-face?s=duotone mask-face}
 * @preview ![mask-face](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mask-face.svg)
 */
const MaskFace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 184c0-30.9 25.1-56 56-56l72 0c-17.7 0-32 14.3-32 32l0 16-40 0c-4.4 0-8 3.6-8 8l0 85c0 33 22.5 61.8 54.5 69.9l29.8 7.4c17.3 26.4 40 49 66.5 66.1l-108-27C37.5 372.1 0 324.1 0 269l0-85zM441.1 412.5c26.6-17.1 49.3-39.7 66.5-66.1l29.8-7.4c32.1-8 54.5-36.8 54.5-69.9l0-85c0-4.4-3.6-8-8-8l-40 0 0-16c0-17.7-14.3-32-32-32l72 0c30.9 0 56 25.1 56 56l0 85c0 55.1-37.5 103.1-90.9 116.4l-108 27z" />
        <path d="M320 64c-27.2 0-53.8 8-76.4 23.1l-37.1 24.8c-15.8 10.5-34.3 16.1-53.3 16.1L128 128c-17.7 0-32 14.3-32 32l0 64c0 123.7 100.3 224 224 224s224-100.3 224-224l0-64c0-17.7-14.3-32-32-32l-25.2 0c-19 0-37.5-5.6-53.3-16.1L396.4 87.1C373.8 72 347.2 64 320 64zM192 208c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16zm16 48l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 80c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default MaskFace;