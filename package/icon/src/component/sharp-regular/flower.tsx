
import { Icon } from "../../index";

/**
 * A component that renders the `flower` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flower?s=sharp-regular flower}
 * @preview ![flower](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/flower.svg)
 */
const Flower: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192.9 100.9C177.6 87.8 157.8 80 136 80c-48.6 0-88 39.4-88 88c0 21.8 7.8 41.6 20.9 56.9L95.3 256 68.9 287.1C55.8 302.4 48 322.2 48 344c0 48.6 39.4 88 88 88c21.8 0 41.6-7.8 56.9-20.9L224 384.7l31.1 26.4C270.4 424.2 290.2 432 312 432c48.6 0 88-39.4 88-88c0-21.8-7.8-41.6-20.9-56.9L352.7 256l26.4-31.1C392.2 209.6 400 189.8 400 168c0-48.6-39.4-88-88-88c-21.8 0-41.6 7.8-56.9 20.9L224 127.3l-31.1-26.4zM448 168c0 33.6-12.2 64.3-32.3 88c20.1 23.7 32.3 54.4 32.3 88c0 75.1-60.9 136-136 136c-33.6 0-64.3-12.2-88-32.3c-23.7 20.1-54.4 32.3-88 32.3C60.9 480 0 419.1 0 344c0-33.6 12.2-64.3 32.3-88C12.2 232.3 0 201.6 0 168C0 92.9 60.9 32 136 32c33.6 0 64.3 12.2 88 32.3C247.7 44.2 278.4 32 312 32c75.1 0 136 60.9 136 136zM224 352l-33.9-33.9-28.1-28.1L128 256l33.9-33.9 28.1-28.1L224 160l33.9 33.9 28.1 28.1L320 256l-33.9 33.9-28.1 28.1L224 352zm0-67.9L252.1 256 224 227.9 195.9 256 224 284.1z" />
    </Icon>
);

export default Flower;