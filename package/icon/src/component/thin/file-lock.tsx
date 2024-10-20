
import { Icon } from "../../index";

/**
 * A component that renders the `file-lock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-lock?s=thin file-lock}
 * @preview ![file-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/file-lock.svg)
 */
const FileLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 496l256 0c.7 0 1.3 0 2 0c1.4 5.5 3.5 10.7 6.3 15.5c-2.7 .3-5.5 .5-8.3 .5L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L204.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 145.9c8.1 8.1 13 18.7 13.9 30.1l-16.1 0L320 176l-72 0c-22.1 0-40-17.9-40-40l0-119.8c-1.3-.2-2.6-.2-3.9-.2L64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48zM358.6 157.3L226.7 25.4c-.9-.9-1.8-1.7-2.7-2.4L224 136c0 13.3 10.7 24 24 24l113.1 0c-.8-1-1.6-1.9-2.4-2.7zM464 208c-26.5 0-48 21.5-48 48l0 64 96 0 0-64c0-26.5-21.5-48-48-48zm-64 48c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 16 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l16 0 0-64zm-16 80c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16l-16 0-16 0-96 0-16 0-16 0z" />
    </Icon>
);

export default FileLock;