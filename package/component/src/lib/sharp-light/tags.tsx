
import { Icon } from "../../index";

/**
 * A component that renders the `tags` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tags?s=sharp-light tags}
 * @preview ![tags](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tags.svg)
 */
const Tags: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 242.7l192 192 160-160 0-37.5L210.7 64 32 64l0 178.7zM224 32L416 224l0 64L246.6 457.4 224 480l-22.6-22.6L0 256 0 64 0 32l32 0 192 0zM88 144a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM355.3 44.7L505.6 194.9l4.7 4.7 0 6.6 0 99.5 0 6.6-4.7 4.7L355.3 467.3 344 478.6 321.4 456l11.3-11.3L478.2 299.1l0-86.2L332.7 67.3 321.4 56 344 33.4l11.3 11.3z" />
    </Icon>
);

export default Tags;