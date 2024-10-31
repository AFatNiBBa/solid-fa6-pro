
import { Icon } from "../../index";

/**
 * A component that renders the `megaphone` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/megaphone?s=sharp-regular megaphone}
 * @preview ![megaphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/megaphone.svg)
 */
const Megaphone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 32l-48 0 0 29.7L48 192.6l0-8.6 0-24L0 160l0 24 0 21.7L0 224l0 64 0 18.3L0 328l0 24 48 0 0-24 0-8.6 117.6 32.1C162 361.7 160 372.6 160 384c0 53 43 96 96 96c46.9 0 86-33.6 94.3-78.1L528 450.3l0 29.7 48 0 0-48 0-352 0-48zM528 400.6L48 269.7l0-27.3L528 111.4l0 289.2zM208 384c0-7.1 1.5-13.8 4.3-19.8l91.5 24.9c-2.6 24.1-23 42.8-47.7 42.8c-26.5 0-48-21.5-48-48z" />
    </Icon>
);

export default Megaphone;