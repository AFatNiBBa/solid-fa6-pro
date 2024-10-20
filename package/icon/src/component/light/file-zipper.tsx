
import { Icon } from "../../index";

/**
 * A component that renders the `file-zipper` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-zipper?s=light file-zipper}
 * @preview ![file-zipper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-zipper.svg)
 */
const FileZipper: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 448l0-256-112 0c-26.5 0-48-21.5-48-48l0-112L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32zm-.5-288c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2L224 144c0 8.8 7.2 16 16 16l111.5 0zM0 64C0 28.7 28.7 0 64 0L220.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM64 80c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16zm32 48l32 0c7.1 0 13.4 4.7 15.4 11.6L158 318.9c1.3 4.6 2 9.3 2 14l0 3.1c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3.1c0-4.7 .7-9.5 2-14l14.7-51.3c2-6.9 8.2-11.6 15.4-11.6zm.7 71.7c-.5 1.7-.7 3.5-.7 5.2l0 3.1c0 8.8 7.2 16 16 16s16-7.2 16-16l0-3.1c0-1.8-.2-3.5-.7-5.2L115.9 288l-7.9 0L96.7 327.7z" />
    </Icon>
);

export default FileZipper;