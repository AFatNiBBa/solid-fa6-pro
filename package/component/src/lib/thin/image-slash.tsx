
import { Icon } from "../../index";

/**
 * A component that renders the `image-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-slash?s=thin image-slash}
 * @preview ![image-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/image-slash.svg)
 */
const ImageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM467.3 464l-280 0L310.8 340.5l-12.6-10L288 340.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0L80 356.7l0-198.4L64 145.6 64 416c0 35.3 28.7 64 64 64l359.5 0-20.3-16zM512 32L152.5 32l20.3 16L512 48c26.5 0 48 21.5 48 48l0 196.7-89.4-89.4c-12.5-12.5-32.8-12.5-45.3 0L400.7 228l12.6 10 23.3-23.3c6.2-6.2 16.4-6.2 22.6 0L560 315.3l0 38.4 16 12.6L576 96c0-35.3-28.7-64-64-64zM80 379.3L180.7 278.6c6.2-6.2 16.4-6.2 22.6 0L276.7 352l-112 112L128 464c-26.5 0-48-21.5-48-48l0-36.7z" />
    </Icon>
);

export default ImageSlash;