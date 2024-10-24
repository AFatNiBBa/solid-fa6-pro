
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-cad` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-cad?s=duotone file-cad}
 * @preview ![file-cad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-cad.svg)
 */
const FileCad: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM200 352c-22.1 0-40 17.9-40 40l0 80c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-8c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 8c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-8c0-22.1-17.9-40-40-40l-16 0zm232 0c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16l32 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-32 0zm16 32l16 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-16 0 0-96zm-160 8l0 56 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 32 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 0-56c0-22.1-17.9-40-40-40l-16 0c-22.1 0-40 17.9-40 40zm32 40l0-40c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 40-32 0z" />
    </Icon>
);

export default FileCad;