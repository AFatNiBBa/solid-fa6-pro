
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-eps` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-eps?s=duotone file-eps}
 * @preview ![file-eps](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-eps.svg)
 */
const FileEps: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM160 368l0 64 0 64c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-32 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-32 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 80 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 16 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0zm32 80l-16 0 0-48 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm117.7-80c-25.2 0-45.7 20.4-45.7 45.7c0 17.3 9.8 33.1 25.2 40.8l31.2 15.6c4.6 2.3 7.6 7 7.6 12.2c0 7.5-6.1 13.7-13.7 13.7L424 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l34.3 0c25.2 0 45.7-20.4 45.7-45.7c0-17.3-9.8-33.1-25.2-40.8l-31.2-15.6c-4.6-2.3-7.6-7-7.6-12.2c0-7.5 6.1-13.7 13.7-13.7l26.3 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-26.3 0z" />
    </Icon>
);

export default FileEps;