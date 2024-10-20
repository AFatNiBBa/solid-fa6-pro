
import { Icon } from "../../index";

/**
 * A component that renders the `folder-closed` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-closed?s=solid folder-closed}
 * @preview ![folder-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/folder-closed.svg)
 */
const FolderClosed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 480L64 480c-35.3 0-64-28.7-64-64L0 192l512 0 0 224c0 35.3-28.7 64-64 64zm64-320L0 160 0 96C0 60.7 28.7 32 64 32l128 0c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8l160 0c35.3 0 64 28.7 64 64z" />
    </Icon>
);

export default FolderClosed;