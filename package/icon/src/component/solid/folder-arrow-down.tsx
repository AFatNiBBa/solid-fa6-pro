
import { Icon } from "../../index";

/**
 * A component that renders the `folder-arrow-down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-down?s=solid folder-arrow-down}
 * @preview ![folder-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/folder-arrow-down.svg)
 */
const FolderArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l128 0c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8l160 0c35.3 0 64 28.7 64 64l0 256zM280 200c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 102.1-31-31c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31L280 200z" />
    </Icon>
);

export default FolderArrowDown;