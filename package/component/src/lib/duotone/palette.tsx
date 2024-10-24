
import { Icon, generic } from "../../index";

/**
 * A component that renders the `palette` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/palette?s=duotone palette}
 * @preview ![palette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/palette.svg)
 */
const Palette: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c3.5 0 7.1-.1 10.6-.2c31.8-1.3 53.4-30.1 53.4-62c0-14.5-6.1-28.3-12.1-42c-4.3-9.8-8.7-19.7-10.8-29.9c-.7-3.2-1-6.5-1-9.9c0-26.5 21.5-48 48-48l97.9 0c36.5 0 69.7-24.8 70.1-61.3c0-.9 0-1.8 0-2.7C512 114.6 397.4 0 256 0S0 114.6 0 256zm128 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm32-128a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm128 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M224 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-96 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM96 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Palette;