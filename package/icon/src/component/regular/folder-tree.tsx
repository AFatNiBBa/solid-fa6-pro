
import { Icon } from "../../index";

/**
 * A component that renders the `folder-tree` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-tree?s=regular folder-tree}
 * @preview ![folder-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/folder-tree.svg)
 */
const FolderTree: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24L0 136 0 392c0 30.9 25.1 56 56 56l200 0 0-48L56 400c-4.4 0-8-3.6-8-8l0-232 208 0 0-48L48 112l0-88zM336 176l0-128 44.1 0 17 17c9.6 9.6 22.6 15 36.2 15L528 80l0 96-192 0zM288 32l0 160c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L433.3 32c-.8 0-1.7-.3-2.3-.9L409.4 9.4c-6-6-14.1-9.4-22.6-9.4L320 0c-17.7 0-32 14.3-32 32zm48 432l0-128 44.1 0 17 17c9.6 9.6 22.6 15 36.2 15l94.7 0 0 96-192 0zM288 320l0 160c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-110.7 0c-.8 0-1.7-.3-2.3-.9l-21.7-21.7c-6-6-14.1-9.4-22.6-9.4L320 288c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default FolderTree;