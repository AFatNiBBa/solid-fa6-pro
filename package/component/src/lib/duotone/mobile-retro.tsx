
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-retro` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-retro?s=duotone mobile-retro}
 * @preview ![mobile-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mobile-retro.svg)
 */
const MobileRetro: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L256 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM56 328a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 80a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm8-248l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128c-17.7 0-32 14.3-32 32zm48-96c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zm24 264a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 80a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm80-80a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 80a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M64 160c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160z" />
    </Icon>
);

export default MobileRetro;