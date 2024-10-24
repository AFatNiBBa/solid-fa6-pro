
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-slash?s=duotone image-slash}
 * @preview ![image-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/image-slash.svg)
 */
const ImageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 146.4L64 416c0 35.3 28.7 64 64 64l359.4 0-81.2-64L320 416l-72 0-96 0c-9.3 0-17.8-5.4-21.8-13.9s-2.6-18.5 3.5-25.6l88-104c.3-.4 .6-.7 1-1.1L64 146.4zM89.5 44.9c23.1 18.1 46.2 36.2 69.3 54.3c5.3-2 11.1-3.2 17.2-3.2c26.5 0 48 21.5 48 48c0 2-.1 4-.4 6c34.8 27.3 69.7 54.6 104.5 81.9l20-29.4c4.5-6.6 11.9-10.5 19.8-10.5s15.4 3.9 19.8 10.5L499.4 366.1l75.9 59.5c.5-3.1 .7-6.3 .7-9.6l0-320c0-35.3-28.7-64-64-64L128 32c-14.4 0-27.8 4.8-38.5 12.9z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default ImageSlash;