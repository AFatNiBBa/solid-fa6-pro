
import { Icon, generic } from "../../index";

/**
 * A component that renders the `upload` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/upload?s=duotone upload}
 * @preview ![upload](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/upload.svg)
 */
const Upload: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-160 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L64 352c-35.3 0-64 28.7-64 64zm456 16a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M256 416c17.7 0 32-14.3 32-32l0-274.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 224 384c0 17.7 14.3 32 32 32z" />
    </Icon>
);

export default Upload;