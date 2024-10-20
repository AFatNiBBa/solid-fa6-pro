
import { Icon } from "../../index";

/**
 * A component that renders the `image-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-slash?s=regular image-slash}
 * @preview ![image-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/image-slash.svg)
 */
const ImageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-55.5-43.5c.5-3.1 .7-6.3 .7-9.6l0-320c0-35.3-28.7-64-64-64L128 32c-14.4 0-27.8 4.8-38.5 12.9L38.8 5.1zM134.4 80L512 80c8.8 0 16 7.2 16 16l0 292.5-53.4-41.9L387 233.3c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3l-7.2 9.3L256 175.3c-.4-26.2-21.7-47.3-48-47.3c-3.7 0-7.4 .4-10.8 1.2L134.4 80zm353 400L282.9 318.9 266 340.7l-30.5-42.7C231 291.7 223.8 288 216 288s-15 3.7-19.5 10.1l-80 112-4.5 6.3 0-.3 0-231.8L64 146.4 64 416c0 35.3 28.7 64 64 64l359.4 0z" />
    </Icon>
);

export default ImageSlash;