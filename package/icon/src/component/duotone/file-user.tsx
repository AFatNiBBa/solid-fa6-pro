
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-user?s=duotone file-user}
 * @preview ![file-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-user.svg)
 */
const FileUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 432c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80zm48-176a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM256 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM80 432c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80z" />
    </Icon>
);

export default FileUser;