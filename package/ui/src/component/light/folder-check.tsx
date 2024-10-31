
import { Icon } from "../../index";

/**
 * A component that renders the `folder-check` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-check?s=light folder-check}
 * @preview ![folder-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/folder-check.svg)
 */
const FolderCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 96c0-17.7 14.3-32 32-32l124.1 0c8.5 0 16.6 3.4 22.6 9.4l35.9 35.9c12 12 28.3 18.7 45.3 18.7L448 128c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L291.9 96c-8.5 0-16.6-3.4-22.6-9.4L233.4 50.7c-12-12-28.3-18.7-45.3-18.7L64 32zM363.3 235.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 329.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z" />
    </Icon>
);

export default FolderCheck;