
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-xmark?s=duotone folder-xmark}
 * @preview ![folder-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/folder-xmark.svg)
 */
const FolderXmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L288 96c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32L64 32C28.7 32 0 60.7 0 96zM168 352c0-6.1 2.3-12.3 7-17c15.7-15.7 31.4-31.4 47-47l-47-47c-9.4-9.4-9.4-24.6 0-33.9c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7l47 47 47-47c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7s7 10.8 7 17s-2.3 12.3-7 17l-47 47 47 47c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17s-10.8 7-17 7s-12.3-2.3-17-7c-15.7-15.7-31.4-31.3-47-47c-15.7 15.7-31.4 31.3-47 47c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7s-7-10.8-7-17z" />
        <path d="M209 207c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47z" />
    </Icon>
);

export default FolderXmark;