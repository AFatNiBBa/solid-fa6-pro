
import { Icon } from "../../index";

/**
 * A component that renders the `folder-tree` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-tree?s=sharp-regular folder-tree}
 * @preview ![folder-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/folder-tree.svg)
 */
const FolderTree: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 24L48 0 0 0 0 24 0 136 0 424l0 24 24 0 232 0 0-48L48 400l0-240 208 0 0-48L48 112l0-88zM412.1 80L432 80l96 0 0 96-192 0 0-128 44.1 0 17.9 17.9L412.1 80zM528 32l-96 0L400 0 336 0 288 0l0 48 0 128 0 48 48 0 192 0 48 0 0-48 0-96 0-48-48 0zM412.1 368l19.9 0 96 0 0 96-192 0 0-128 44.1 0 17.9 17.9L412.1 368zM528 320l-96 0-32-32-64 0-48 0 0 48 0 128 0 48 48 0 192 0 48 0 0-48 0-96 0-48-48 0z" />
    </Icon>
);

export default FolderTree;