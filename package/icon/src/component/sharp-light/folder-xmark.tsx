
import { Icon } from "../../index";

/**
 * A component that renders the `folder-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-xmark?s=sharp-light folder-xmark}
 * @preview ![folder-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder-xmark.svg)
 */
const FolderXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l192 0 48 64 208 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0zm240 96l-16 0-9.6-12.8L208 64 32 64l0 384 448 0 0-320-208 0zm-80.6 72.8l11.3 11.3L256 265.4l53.3-53.3 11.3-11.3 22.6 22.6-11.3 11.3L278.6 288l53.3 53.3 11.3 11.3-22.6 22.6-11.3-11.3L256 310.6l-53.3 53.3-11.3 11.3-22.6-22.6 11.3-11.3L233.4 288l-53.3-53.3-11.3-11.3 22.6-22.6z" />
    </Icon>
);

export default FolderXmark;