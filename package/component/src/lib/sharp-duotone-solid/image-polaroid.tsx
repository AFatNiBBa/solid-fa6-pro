
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-polaroid` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid?s=sharp-duotone-solid image-polaroid}
 * @preview ![image-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/image-polaroid.svg)
 */
const ImagePolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM64 96l320 0 0 256L64 352 64 96z" />
        <path d="M384 96L64 96l0 256 320 0 0-256zM128 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM352 320l-144 0-48 0-64 0 0-32 56-64 30.2 34.5L256 160l96 128 0 32z" />
    </Icon>
);

export default ImagePolaroid;