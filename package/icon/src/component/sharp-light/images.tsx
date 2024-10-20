
import { Icon } from "../../index";

/**
 * A component that renders the `images` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images?s=sharp-light images}
 * @preview ![images](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/images.svg)
 */
const Images: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 64l416 0 0 137.4-68.7-68.7L464 121.4l-11.3 11.3L304 281.4l-84.7-84.7L208 185.4l-11.3 11.3L128 265.4 128 64zm448 0l0-32-32 0L128 32 96 32l0 32 0 240 0 48 0 32 32 0 112 0c0 0 0 0 0 0l304 0 32 0 0-32 0-112c0 0 0 0 0-.1l0-176zM464 166.6l80 80L544 352l-265.4 0 36.7-36.7L464 166.6zM281.4 304l-48 48L128 352l0-41.4 80-80L281.4 304zM32 112l0-16L0 96l0 16L0 464l0 16 16 0 448 0 16 0 0-32-16 0L32 448l0-336zm232 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Images;