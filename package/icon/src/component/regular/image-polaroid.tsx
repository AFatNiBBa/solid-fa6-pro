
import { Icon } from "../../index";

/**
 * A component that renders the `image-polaroid` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid?s=regular image-polaroid}
 * @preview ![image-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/image-polaroid.svg)
 */
const ImagePolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 368l0 48c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-48 352 0zM75.3 320L48 320 48 96c0-8.8 7.2-16 16-16l320 0c8.8 0 16 7.2 16 16l0 224-23.6 0L284.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-56 85.6-16.6-22.6c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L75.3 320zM448 320l0-224c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 320l0 24 0 24 0 48c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-48 0-24 0-24zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default ImagePolaroid;