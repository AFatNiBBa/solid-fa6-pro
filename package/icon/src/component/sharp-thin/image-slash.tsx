
import { Icon } from "../../index";

/**
 * A component that renders the `image-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-slash?s=sharp-thin image-slash}
 * @preview ![image-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/image-slash.svg)
 */
const ImageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zM467.3 464l-280 0L310.8 340.5l-12.6-10L288 340.7l-86.5-86.5-10.6-8.4-4.5 4.5L80 356.7l0-198.4L64 145.6 64 464l0 16 16 0 407.5 0-20.3-16zM560 32L152.5 32l20.3 16L560 48l0 244.7L453.7 186.3l-5.7-5.7-5.7 5.7L400.7 228l12.6 10L448 203.3l112 112 0 38.4 16 12.6L576 48l0-16-16 0zM80 379.3l112-112L276.7 352l-112 112L80 464l0-84.7z" />
    </Icon>
);

export default ImageSlash;