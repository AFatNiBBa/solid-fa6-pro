
import { Icon } from "../../index";

/**
 * A component that renders the `folder-heart` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-heart?s=sharp-light folder-heart}
 * @preview ![folder-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder-heart.svg)
 */
const FolderHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l192 0 48 64 208 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0zm240 96l-16 0-9.6-12.8L208 64 32 64l0 384 448 0 0-320-208 0zm-23.7 81.2l7.7 7.4 7.7-7.4c11.5-11 26.8-17.2 42.7-17.2l2.4 0c32.7 0 59.2 26.5 59.2 59.2c0 16.1-6.6 31.5-18.2 42.7l-82.8 79.6L256 384.1l-11.1-10.7-82.8-79.6c-11.6-11.2-18.2-26.6-18.2-42.7c0-32.7 26.5-59.2 59.2-59.2l2.4 0c15.9 0 31.2 6.2 42.7 17.2zm79.3 61.6c5.3-5.1 8.3-12.2 8.3-19.6c0-15-12.2-27.2-27.2-27.2l-2.4 0c-7.7 0-15 3-20.5 8.3l-7.7 7.4L256 261l-22.2-21.3-7.7-7.4c-5.5-5.3-12.9-8.3-20.5-8.3l-2.4 0c-15 0-27.2 12.2-27.2 27.2c0 7.4 3 14.5 8.3 19.6L256 339.7l71.7-68.9z" />
    </Icon>
);

export default FolderHeart;