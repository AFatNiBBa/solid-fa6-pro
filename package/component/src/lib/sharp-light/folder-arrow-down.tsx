
import { Icon } from "../../index";

/**
 * A component that renders the `folder-arrow-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-down?s=sharp-light folder-arrow-down}
 * @preview ![folder-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder-arrow-down.svg)
 */
const FolderArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l192 0 48 64 208 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0zm240 96l-16 0-9.6-12.8L208 64 32 64l0 384 448 0 0-320-208 0zm0 80l0 121.4 52.7-52.7L336 265.4 358.6 288l-11.3 11.3-80 80L256 390.6l-11.3-11.3-80-80L153.4 288 176 265.4l11.3 11.3L240 329.4 240 208l0-16 32 0 0 16z" />
    </Icon>
);

export default FolderArrowDown;