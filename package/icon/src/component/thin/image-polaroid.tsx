
import { Icon } from "../../index";

/**
 * A component that renders the `image-polaroid` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid?s=thin image-polaroid}
 * @preview ![image-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/image-polaroid.svg)
 */
const ImagePolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 352l0 64c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-64 416 0zm-11.3-16l-265.4 0 42.3-42.3L282.3 209c3.1-3.1 8.2-3.1 11.3 0l127 127zm-282.3-5.7l-5.7 5.7L27.3 336l95-95c3.1-3.1 8.2-3.1 11.3 0l47 47-42.3 42.3zM16 96c0-26.5 21.5-48 48-48l320 0c26.5 0 48 21.5 48 48l0 228.7-127-127c-9.4-9.4-24.6-9.4-33.9 0l-79 79-47-47c-9.4-9.4-24.6-9.4-33.9 0l-95 95L16 96zM448 336l0-240c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 336l0 8 0 8 0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-8 0-8zM136 144a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80z" />
    </Icon>
);

export default ImagePolaroid;