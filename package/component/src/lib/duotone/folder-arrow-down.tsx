
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-arrow-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-down?s=duotone folder-arrow-down}
 * @preview ![folder-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/folder-arrow-down.svg)
 */
const FolderArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L288 96c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32L64 32C28.7 32 0 60.7 0 96zM160 288c0-6.1 2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l31 31L232 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17l-72 72c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7l-72-72c-4.7-4.7-7-10.8-7-17z" />
        <path d="M256 176c13.3 0 24 10.7 24 24l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L232 200c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default FolderArrowDown;