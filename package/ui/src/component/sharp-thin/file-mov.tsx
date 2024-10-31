
import { Icon } from "../../index";

/**
 * A component that renders the `file-mov` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-mov?s=sharp-thin file-mov}
 * @preview ![file-mov](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-mov.svg)
 */
const FileMov: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 496l-64 0L16 16l192 0 0 152 0 8 8 0 152 0 0 128 16 0 0-144L224 0 16 0 0 0 0 16 0 496l0 16 16 0 64 0 0-16zM361.4 160L224 160l0-137.4L361.4 160zM248 376l0-8-8 0-5.6 0-4.6 0-2.3 3.9-35.6 60.5-37-60.6-2.3-3.8-4.5 0-4 0-8 0 0 8 0 128 0 8 16 0 0-8 0-106.1 33.2 54.3 7 11.4 6.8-11.5L232 395.8 232 504l0 8 16 0 0-8 0-128zm192 0l0-8-16 0 0 8 0 35c0 20.1 3.6 40.1 10.7 59l13.8 36.8 1.9 5.2 5.5 0 16 0 5.5 0 1.9-5.2L493.3 470c7.1-18.9 10.7-38.8 10.7-59l0-35 0-8-16 0 0 8 0 35c0 18.2-3.3 36.3-9.7 53.4L466.5 496l-4.9 0-11.9-31.6c-6.4-17.1-9.7-35.1-9.7-53.4l0-35zM296 400l0 80c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-80c0-17.7-14.3-32-32-32l-16 0c-17.7 0-32 14.3-32 32zm32-16l16 0c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-80c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default FileMov;