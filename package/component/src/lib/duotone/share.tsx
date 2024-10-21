
import { Icon, generic } from "../../index";

/**
 * A component that renders the `share` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share?s=duotone share}
 * @preview ![share](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/share.svg)
 */
const Share: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0-160-112 0C78.8 128 0 206.8 0 304z" />
        <path d="M288 64c0-12.6 7.4-24.1 19-29.2s25-3 34.4 5.4l160 144c6.7 6.1 10.6 14.7 10.6 23.8s-3.8 17.7-10.6 23.8l-160 144c-9.4 8.5-22.9 10.6-34.4 5.4s-19-16.6-19-29.2l0-288z" />
    </Icon>
);

export default Share;