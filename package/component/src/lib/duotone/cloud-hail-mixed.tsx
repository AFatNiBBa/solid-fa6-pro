
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-hail-mixed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-hail-mixed?s=duotone cloud-hail-mixed}
 * @preview ![cloud-hail-mixed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-hail-mixed.svg)
 */
const CloudHailMixed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480a32 32 0 1 0 64 0A32 32 0 1 0 0 480zm39.7-89.5c-5.2 12.2 .4 26.3 12.6 31.5s26.3-.4 31.5-12.6l10.3-24c5.2-12.2-.4-26.3-12.6-31.5s-26.3 .4-31.5 12.6l-10.3 24zm82.3 88c-5.2 12.2 .4 26.3 12.6 31.5s26.3-.4 31.5-12.6l48-112c5.2-12.2-.4-26.3-12.6-31.5s-26.3 .4-31.5 12.6l-48 112zM224 480a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm47.7-89.5c-5.2 12.2 .4 26.3 12.6 31.5s26.3-.4 31.5-12.6l10.3-24c5.2-12.2-.4-26.3-12.6-31.5s-26.3 .4-31.5 12.6l-10.3 24zm82.3 88c-5.2 12.2 .4 26.3 12.6 31.5s26.3-.4 31.5-12.6l48-112c5.2-12.2-.4-26.3-12.6-31.5s-26.3 .4-31.5 12.6l-48 112z" />
        <path d="M0 224c0 53 43 96 96 96l320 0c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224z" />
    </Icon>
);

export default CloudHailMixed;