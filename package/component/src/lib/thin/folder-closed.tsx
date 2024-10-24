
import { Icon } from "../../index";

/**
 * A component that renders the `folder-closed` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-closed?s=thin folder-closed}
 * @preview ![folder-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/folder-closed.svg)
 */
const FolderClosed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 464L64 464c-26.5 0-48-21.5-48-48l0-224 480 0 0 224c0 26.5-21.5 48-48 48zm48-288L16 176l0-80c0-26.5 21.5-48 48-48l133.5 0c12.7 0 24.9 5.1 33.9 14.1l35.9 35.9c9 9 21.2 14.1 33.9 14.1L448 112c26.5 0 48 21.5 48 48l0 16zM64 480l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L301.3 96c-8.5 0-16.6-3.4-22.6-9.4L242.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default FolderClosed;