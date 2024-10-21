
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-polaroid` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid?s=duotone image-polaroid}
 * @preview ![image-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/image-polaroid.svg)
 */
const ImagePolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm64 32c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32L96 352c-17.7 0-32-14.3-32-32l0-192z" />
        <path d="M64 128c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32L96 352c-17.7 0-32-14.3-32-32l0-192zm184 32c-5.3 0-10.2 2.6-13.2 6.9l-52.4 76.3-9.6-12.8c-3-4-7.8-6.4-12.8-6.4s-9.8 2.4-12.8 6.4l-48 64c-3.6 4.8-4.2 11.3-1.5 16.8s8.3 8.8 14.3 8.8l48 0 48 0 40 0 88 0c5.9 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-88-128c-3-4.3-7.9-6.9-13.2-6.9zM128 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default ImagePolaroid;