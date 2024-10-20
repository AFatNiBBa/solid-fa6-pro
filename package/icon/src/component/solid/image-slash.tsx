
import { Icon } from "../../index";

/**
 * A component that renders the `image-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-slash?s=solid image-slash}
 * @preview ![image-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/image-slash.svg)
 */
const ImageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-55.5-43.5c.5-3.1 .7-6.3 .7-9.6l0-320c0-35.3-28.7-64-64-64L128 32c-14.4 0-27.8 4.8-38.5 12.9L38.8 5.1zm120 94.1c5.3-2 11.1-3.2 17.2-3.2c26.5 0 48 21.5 48 48c0 2-.1 4-.4 6L158.8 99.2zM328.1 231.9l20-29.4c4.5-6.6 11.9-10.5 19.8-10.5s15.4 3.9 19.8 10.5L499.4 366.1 328.1 231.9zM221.7 272.5c.3-.4 .6-.7 1-1.1L64 146.4 64 416c0 35.3 28.7 64 64 64l359.4 0-81.2-64L320 416l-72 0-96 0c-9.3 0-17.8-5.4-21.8-13.9s-2.6-18.5 3.5-25.6l88-104z" />
    </Icon>
);

export default ImageSlash;