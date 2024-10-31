
import { Icon } from "../../index";

/**
 * A component that renders the `file-music` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-music?s=thin file-music}
 * @preview ![file-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/file-music.svg)
 */
const FileMusic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 496c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l140.1 0c1.3 0 2.6 .1 3.9 .2L208 136c0 22.1 17.9 40 40 40l119.8 0c.2 1.3 .2 2.6 .2 3.9L368 448c0 26.5-21.5 48-48 48L64 496zM358.6 157.3c.9 .9 1.7 1.8 2.4 2.7L248 160c-13.3 0-24-10.7-24-24l0-113.1c1 .8 1.9 1.6 2.7 2.4L358.6 157.3zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-268.1c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1L64 0zM300.6 225.4c-2.2-1.5-4.9-1.8-7.4-.9l-128 48c-3.1 1.2-5.2 4.2-5.2 7.5l0 106.2c-8.5-6.3-19.7-10.2-32-10.2c-26.5 0-48 17.9-48 40s21.5 40 48 40c26.5 0 48-17.9 48-40c0 0 0 0 0 0l0-130.5 112-42 0 110.6c-8.5-6.3-19.7-10.2-32-10.2c-26.5 0-48 17.9-48 40s21.5 40 48 40c26.5 0 48-17.9 48-40c0 0 0 0 0 0l0-152c0-2.6-1.3-5.1-3.4-6.6zM256 360c20.5 0 32 13.4 32 24s-11.5 24-32 24s-32-13.4-32-24s11.5-24 32-24zM128 392c20.5 0 32 13.4 32 24s-11.5 24-32 24s-32-13.4-32-24s11.5-24 32-24z" />
    </Icon>
);

export default FileMusic;