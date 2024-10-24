
import { Icon } from "../../index";

/**
 * A component that renders the `folder-tree` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-tree?s=sharp-light folder-tree}
 * @preview ![folder-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder-tree.svg)
 */
const FolderTree: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L0 112 0 400l0 16 16 0 240 0 0-32L32 384l0-256 224 0 0-32L32 96 32 0 0 0zM426.7 64L440 64l104 0 0 128-224 0 0-160 74.7 0 22.6 22.6 9.4 9.4zM544 32L440 32 408 0 320 0 288 0l0 32 0 160 0 32 32 0 224 0 32 0 0-32 0-128 0-32-32 0zM426.7 352l13.3 0 104 0 0 128-224 0 0-160 74.7 0 22.6 22.6 9.4 9.4zM544 320l-104 0-32-32-88 0-32 0 0 32 0 160 0 32 32 0 224 0 32 0 0-32 0-128 0-32-32 0z" />
    </Icon>
);

export default FolderTree;