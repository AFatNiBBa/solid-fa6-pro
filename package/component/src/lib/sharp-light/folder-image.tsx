
import { Icon } from "../../index";

/**
 * A component that renders the `folder-image` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-image?s=sharp-light folder-image}
 * @preview ![folder-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder-image.svg)
 */
const FolderImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l192 0 48 64 208 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0zm240 96l-16 0-9.6-12.8L208 64 32 64l0 384 448 0 0-320-208 0zM104 192a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm184.4-9.5l12.2 15.7 112 144 3.4 4.3 0 5.5 0 16 0 16-16 0-288 0-16 0 0-16 0-16 0-5.6 3.5-4.4 64-80 11.2-14 12.6 12.6 19.6 19.6 68.8-82.5 12.7-15.3zm-.9 51l-67.3 80.7-11.2 13.5-12.4-12.4L177.3 296l-44.8 56 247.2 0L287.6 233.5z" />
    </Icon>
);

export default FolderImage;