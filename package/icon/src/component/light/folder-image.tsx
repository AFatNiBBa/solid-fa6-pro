
import { Icon } from "../../index";

/**
 * A component that renders the `folder-image` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-image?s=light folder-image}
 * @preview ![folder-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/folder-image.svg)
 */
const FolderImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 96c0-17.7 14.3-32 32-32l124.1 0c8.5 0 16.6 3.4 22.6 9.4l35.9 35.9c12 12 28.3 18.7 45.3 18.7L448 128c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L291.9 96c-8.5 0-16.6-3.4-22.6-9.4L233.4 50.7c-12-12-28.3-18.7-45.3-18.7L64 32zm88 160a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm135.9 32.1L380.3 352l-248.7 0 44.6-63.8 19 25.4c3 4 7.8 6.4 12.8 6.4s9.8-2.4 12.8-6.4l67.1-89.5zm-25.5-19.4L208 277.3l-6.5-8.7c-6-8-15.4-12.7-25.3-12.7c-10.3 0-20 5-26 13.5l-49.1 70.2c-3.3 4.7-5.1 10.4-5.1 16.2c0 15.6 12.6 28.2 28.2 28.2l263.7 0c15.5 0 28.1-12.6 28.1-28.1c0-5.9-1.9-11.7-5.3-16.4l-97-134.3c-6-8.3-15.6-13.2-25.8-13.2c-10 0-19.4 4.7-25.5 12.7z" />
    </Icon>
);

export default FolderImage;