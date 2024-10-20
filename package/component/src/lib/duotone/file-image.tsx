
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-image` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-image?s=duotone file-image}
 * @preview ![file-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-image.svg)
 */
const FileImage: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM64 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 176c0 2.7 .7 5.4 2.1 7.9c2.8 5 8.2 8.1 13.9 8.1l48 0 48 0 40 0 88 0c5.9 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-88-128c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-48.3 70.2-12.8-21.4c-2.9-4.8-8.1-7.8-13.7-7.8s-10.8 2.9-13.7 7.8c-16 26.7-32 53.3-48 80c-1.5 2.5-2.3 5.4-2.3 8.2z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM229.2 294.9c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-48.3 70.2-12.8-21.4c-2.9-4.8-8.1-7.8-13.7-7.8s-10.8 2.9-13.7 7.8l-48 80c-3 4.9-3 11.1-.2 16.1s8.2 8.1 13.9 8.1l48 0 48 0 40 0 88 0c5.9 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-88-128z" />
    </Icon>
);

export default FileImage;