
import { Icon, generic } from "../../index";

/**
 * A component that renders the `download` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/download?s=duotone download}
 * @preview ![download](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/download.svg)
 */
const Download: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-114.7 0-54.6 54.6c-6.2 6.2-14.4 9.4-22.6 9.4s-16.4-3.1-22.6-9.4c-18.2-18.2-36.4-36.4-54.6-54.6L64 352c-35.3 0-64 28.7-64 64zm456 16a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M256 0c17.7 0 32 14.3 32 32l0 274.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 306.7 224 32c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Download;