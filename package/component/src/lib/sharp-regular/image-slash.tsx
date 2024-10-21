
import { Icon } from "../../index";

/**
 * A component that renders the `image-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-slash?s=sharp-regular image-slash}
 * @preview ![image-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/image-slash.svg)
 */
const ImageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L576 424.4 576 80l0-48-48 0L112 32 70.5 32 48.4 14.8zm84 65.2L528 80l0 307.2-66.9-51.9L387.4 233.9 367.8 207 348.5 234l-6.3 8.8L256 176c0-26.5-21.5-48-48-48c-4.1 0-8.1 .5-11.9 1.5L132.4 80zm355 400L286.1 321.4l-27.8 38.9L225 327l-17.9-17.9-16.9 18.8-72 80-6.2 6.8 0-230.5L64 146.4 64 432l0 48 48 0 375.4 0z" />
    </Icon>
);

export default ImageSlash;