
import { Icon } from "../../index";

/**
 * A component that renders the `folder-bookmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-bookmark?s=sharp-light folder-bookmark}
 * @preview ![folder-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder-bookmark.svg)
 */
const FolderBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l192 0 48 64 208 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0zm384 96l0 176 0 25.9-23.2-11.6L336 289.9l-56.8 28.4L256 329.9l0-25.9 0-176-9.6-12.8L208 64 32 64l0 384 448 0 0-320-64 0zm-32 0l-96 0 0 150.1 40.8-20.4 7.2-3.6 7.2 3.6L384 278.1 384 128z" />
    </Icon>
);

export default FolderBookmark;