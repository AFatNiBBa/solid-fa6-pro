
import { Icon } from "../../index";

/**
 * A component that renders the `folder-bookmark` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-bookmark?s=light folder-bookmark}
 * @preview ![folder-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/folder-bookmark.svg)
 */
const FolderBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 96l0 320c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-32 0 0 176c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7L336 289.9l-56.8 28.4c-5 2.5-10.9 2.2-15.6-.7s-7.6-8.1-7.6-13.6l0-187c-3.3-2.3-6.5-4.8-9.4-7.7L210.7 73.4c-6-6-14.1-9.4-22.6-9.4L64 64C46.3 64 32 78.3 32 96zm352 32l-92.1 0c-1.3 0-2.6 0-3.9-.1l0 150.2 40.8-20.4c4.5-2.3 9.8-2.3 14.3 0L384 278.1 384 128zm16-32l48 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l124.1 0c17 0 33.3 6.7 45.3 18.7l35.9 35.9c6 6 14.1 9.4 22.6 9.4L400 96z" />
    </Icon>
);

export default FolderBookmark;