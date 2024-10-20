
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-png` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-png?s=duotone file-png}
 * @preview ![file-png](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-png.svg)
 */
const FilePng: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM318.3 360.8c-3.3-6.6-10.8-10.1-18-8.4s-12.3 8.2-12.3 15.6l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-60.2 33.7 67.4c3.3 6.6 10.8 10.1 18 8.4s12.3-8.2 12.3-15.6l0-128c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 60.2-33.7-67.4zM176 352c-8.8 0-16 7.2-16 16l0 80 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 16 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0zm32 80l-16 0 0-48 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm208-40l0 80c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-24c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l0 8c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-8c0-22.1-17.9-40-40-40l-16 0c-22.1 0-40 17.9-40 40z" />
    </Icon>
);

export default FilePng;