
import { Icon } from "../../index";

/**
 * A component that renders the `file-music` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-music?s=sharp-regular file-music}
 * @preview ![file-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-music.svg)
 */
const FileMusic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464L48 48l176 0 0 112 112 0 0 304L48 464zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zm48 208l0-23.1L282.4 193l-128 48L144 244.9l0 11.1 0 32 0 81.8c-5-1.2-10.4-1.8-16-1.8c-26.5 0-48 14.3-48 32s21.5 32 48 32s48-14.3 48-32l0-100.9 96-36 0 74.7c-5-1.2-10.4-1.8-16-1.8c-26.5 0-48 14.3-48 32s21.5 32 48 32s48-14.3 48-32l0-128 0-32z" />
    </Icon>
);

export default FileMusic;