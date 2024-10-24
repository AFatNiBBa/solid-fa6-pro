
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-binary` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-binary?s=duotone file-binary}
 * @preview ![file-binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-binary.svg)
 */
const FileBinary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM64 304l0 64c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-32 0c-26.5 0-48 21.5-48 48zm32 0c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zm128-32c0 8.8 7.2 16 16 16l16 0 0 96-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-112c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM112 256c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-32 0zM96 304c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zm144-48c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 96-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-112c0-8.8-7.2-16-16-16l-32 0z" />
    </Icon>
);

export default FileBinary;