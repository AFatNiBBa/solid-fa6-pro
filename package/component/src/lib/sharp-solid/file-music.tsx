
import { Icon } from "../../index";

/**
 * A component that renders the `file-music` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-music?s=sharp-solid file-music}
 * @preview ![file-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-music.svg)
 */
const FileMusic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zm32 224l0 32 0 128c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-74.7-96 36L160 416c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-81.8 0-32 0-11.1 10.4-3.9 128-48 21.6-8.1 0 23.1z" />
    </Icon>
);

export default FileMusic;