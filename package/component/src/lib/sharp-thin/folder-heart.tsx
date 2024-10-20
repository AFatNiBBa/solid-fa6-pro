
import { Icon } from "../../index";

/**
 * A component that renders the `folder-heart` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-heart?s=sharp-thin folder-heart}
 * @preview ![folder-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folder-heart.svg)
 */
const FolderHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 224 0 16 0 0 16 0 352 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 208 0zm48 80l-8 0-4.8-6.4L216 48 16 48l0 416 480 0 0-352-224 0zm-23.7 97.2l7.7 7.4 7.7-7.4c11.5-11 26.8-17.2 42.7-17.2l2.4 0c32.7 0 59.2 26.5 59.2 59.2c0 16.1-6.6 31.5-18.2 42.7l-82.8 79.6L256 384.1l-11.1-10.7-82.8-79.6c-11.6-11.2-18.2-26.6-18.2-42.7c0-32.7 26.5-59.2 59.2-59.2l2.4 0c15.9 0 31.2 6.2 42.7 17.2zm-3.4 18.9l-7.7-7.4c-8.5-8.2-19.8-12.7-31.6-12.7l-2.4 0c-23.9 0-43.2 19.3-43.2 43.2c0 11.7 4.8 23 13.2 31.1L256 361.9l82.8-79.6c8.5-8.1 13.2-19.4 13.2-31.1c0-23.9-19.3-43.2-43.2-43.2l-2.4 0c-11.8 0-23.1 4.6-31.6 12.7l-7.7 7.4L256 238.8l-11.1-10.7z" />
    </Icon>
);

export default FolderHeart;