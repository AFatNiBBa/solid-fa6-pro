
import { Icon } from "../../index";

/**
 * A component that renders the `file-heart` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-heart?s=sharp-light file-heart}
 * @preview ![file-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-heart.svg)
 */
const FileHeart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 480L32 480 32 32l160 0 0 144 0 16 16 0 144 0 0 288zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zM170.1 296.5L192 316.9l21.9-20.4 5.2-4.8c4.3-4 10-6.3 15.9-6.3l3.5 0c10.9 0 19.8 8.9 19.8 19.8c0 5.5-2.3 10.7-6.3 14.4l-60 56.1-60-56.1c-4-3.7-6.3-9-6.3-14.4c0-10.9 8.9-19.8 19.8-19.8l3.5 0c5.9 0 11.6 2.2 15.9 6.3l5.2 4.8zm-76.4 8.7c0 14.3 5.9 28 16.4 37.8l70.9 66.4L192 419.5l10.9-10.2 70.9-66.4c10.5-9.8 16.4-23.5 16.4-37.8c0-28.6-23.2-51.8-51.8-51.8l-3.5 0c-14 0-27.5 5.3-37.8 14.9l-5.2 4.8-5.2-4.8c-10.3-9.6-23.8-14.9-37.8-14.9l-3.5 0c-28.6 0-51.8 23.2-51.8 51.8z" />
    </Icon>
);

export default FileHeart;