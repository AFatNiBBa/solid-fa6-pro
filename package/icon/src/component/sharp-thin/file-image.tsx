
import { Icon } from "../../index";

/**
 * A component that renders the `file-image` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-image?s=sharp-thin file-image}
 * @preview ![file-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-image.svg)
 */
const FileImage: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 496L16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496zM224 22.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zM136 224a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm136 66.1l-6.5 9.3-50.5 72.2-33.3-33.3-6.2-6.2-5.6 6.7-80 96L48 413.1l0 2.9 0 24 0 8 8 0 272 0 8 0 0-8 0-24 0-2.5-1.5-2.1-96-136-6.6-9.3zm.1 27.8l88 124.6 0 13.5L64 432l0-13.1 72.5-87 33.8 33.8 6.7 6.7 5.5-7.8L232 293.9z" />
    </Icon>
);

export default FileImage;