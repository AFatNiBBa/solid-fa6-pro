
import { Icon } from "../../index";

/**
 * A component that renders the `images` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images?s=thin images}
 * @preview ![images](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/images.svg)
 */
const Images: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 48c26.5 0 48 21.5 48 48l0 132.7-79-79c-9.4-9.4-24.6-9.4-33.9 0l-143 143-79-79c-9.4-9.4-24.6-9.4-33.9 0l-79 79L112 96c0-26.5 21.5-48 48-48l352 0zM112 320l0-4.7L202.3 225c3.1-3.1 8.2-3.1 11.3 0l79 79L229 367.7c-.1 .1-.2 .2-.3 .3L160 368c-26.5 0-48-21.5-48-48zm400 48l-260.7 0 58.3-58.3L458.3 161c3.1-3.1 8.2-3.1 11.3 0L560 251.3l0 68.7c0 26.5-21.5 48-48 48zM160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zm88 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM224 88a40 40 0 1 0 0 80 40 40 0 1 0 0-80zM0 192L0 416c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l-16 0c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l0-16c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default Images;