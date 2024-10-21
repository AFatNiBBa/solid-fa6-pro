
import { Icon } from "../../index";

/**
 * A component that renders the `file-music` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-music?s=light file-music}
 * @preview ![file-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-music.svg)
 */
const FileMusic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 448l0-256-112 0c-26.5 0-48-21.5-48-48l0-112L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32zm-.5-288c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2L224 144c0 8.8 7.2 16 16 16l111.5 0zM0 64C0 28.7 28.7 0 64 0L220.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM304 232c0-5.2-2.6-10.2-6.9-13.2s-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15l0 90.5c-5-1.6-10.4-2.5-16-2.5c-26.5 0-48 19.7-48 44s21.5 44 48 44s48-19.7 48-44c0-.8 0-1.6-.1-2.5c0-.5 .1-1 .1-1.5l0-116.9 96-36 0 83.4c-5-1.6-10.4-2.5-16-2.5c-26.5 0-48 19.7-48 44s21.5 44 48 44s48-19.7 48-44c0-.8 0-1.6-.1-2.5c0-.5 .1-1 .1-1.5l0-144zM256 392c-11.5 0-16-7.9-16-12s4.5-12 16-12s16 7.9 16 12s-4.5 12-16 12zM128 424c-11.5 0-16-7.9-16-12s4.5-12 16-12s16 7.9 16 12s-4.5 12-16 12z" />
    </Icon>
);

export default FileMusic;