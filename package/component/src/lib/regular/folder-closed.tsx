
import { Icon } from "../../index";

/**
 * A component that renders the `folder-closed` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-closed?s=regular folder-closed}
 * @preview ![folder-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/folder-closed.svg)
 */
const FolderClosed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M251.7 127.6s0 0 0 0c10.5 10.5 24.7 16.4 39.6 16.4L448 144c8.8 0 16 7.2 16 16l0 32L48 192l0-96c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l33.9-33.9L208.8 84.7l42.9 42.9zM48 240l416 0 0 176c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-176zM285.7 93.7L242.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L291.3 96c-2.1 0-4.2-.8-5.7-2.3z" />
    </Icon>
);

export default FolderClosed;