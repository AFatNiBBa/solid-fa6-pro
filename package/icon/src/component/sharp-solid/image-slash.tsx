
import { Icon } from "../../index";

/**
 * A component that renders the `image-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-slash?s=sharp-solid image-slash}
 * @preview ![image-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/image-slash.svg)
 */
const ImageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L576 424.4 576 32 70.5 32 48.4 14.8zM157.7 99.6c5.7-2.3 11.8-3.6 18.3-3.6c26.5 0 48 21.5 48 48c0 2.3-.2 4.6-.5 6.8L157.7 99.6zM327.5 231.5l21-29.4L368 174.7l19.5 27.3 120 168 1.9 2.7-182-141.3zM214.2 279.9l8-8.8L64 146.4 64 480l423.4 0-81.2-64-113.3 0L280 416l-32 0-24 0-72 0-24 0 0-24 0-8 0-9.3 6.2-6.9 80-88z" />
    </Icon>
);

export default ImageSlash;