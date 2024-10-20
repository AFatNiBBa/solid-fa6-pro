
import { Icon } from "../../index";

/**
 * A component that renders the `file-heart` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-heart?s=sharp-thin file-heart}
 * @preview ![file-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-heart.svg)
 */
const FileHeart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496 16 16zm208 6.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zM93.7 305.1c0 14.3 5.9 28 16.4 37.8l70.9 66.4L192 419.5l10.9-10.2 70.9-66.4c10.5-9.8 16.4-23.5 16.4-37.8c0-28.6-23.2-51.8-51.8-51.8l-3.5 0c-14 0-27.5 5.3-37.8 14.9l-5.2 4.8-5.2-4.8c-10.3-9.6-23.8-14.9-37.8-14.9l-3.5 0c-28.6 0-51.8 23.2-51.8 51.8zm87.4-20.4L192 295l10.9-10.2 5.2-4.8c7.3-6.8 16.9-10.6 26.9-10.6l3.5 0c19.8 0 35.8 16 35.8 35.8c0 9.9-4.1 19.4-11.3 26.1L192 397.6l-70.9-66.4c-7.2-6.8-11.3-16.2-11.3-26.1c0-19.8 16-35.8 35.8-35.8l3.5 0c10 0 19.6 3.8 26.9 10.6l5.2 4.8z" />
    </Icon>
);

export default FileHeart;