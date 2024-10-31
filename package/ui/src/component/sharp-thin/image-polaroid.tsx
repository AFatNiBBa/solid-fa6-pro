
import { Icon } from "../../index";

/**
 * A component that renders the `image-polaroid` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid?s=sharp-thin image-polaroid}
 * @preview ![image-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/image-polaroid.svg)
 */
const ImagePolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 352L16 352l0 112 416 0 0-112zm-11.3-16L288 203.3l-90.3 90.3L155.3 336l265.4 0zm-282.3-5.7L180.7 288 128 235.3 27.3 336l105.4 0 5.7-5.7zM16 48l0 276.7L122.3 218.3l5.7-5.7 5.7 5.7L192 276.7l90.3-90.3 5.7-5.7 5.7 5.7L432 324.7 432 48 16 48zM448 336l0 8 0 8 0 112 0 16-16 0L16 480 0 480l0-16L0 352l0-8 0-8L0 48 0 32l16 0 416 0 16 0 0 16 0 288zM88 144a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 40a40 40 0 1 1 0-80 40 40 0 1 1 0 80z" />
    </Icon>
);

export default ImagePolaroid;