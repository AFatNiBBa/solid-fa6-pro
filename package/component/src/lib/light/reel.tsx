
import { Icon } from "../../index";

/**
 * A component that renders the `reel` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reel?s=light reel}
 * @preview ![reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/reel.svg)
 */
const Reel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 16C0 7.2 7.2 0 16 0L80 0 368 0l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 64c0 8.8-7.2 16-16 16L80 112c-8.8 0-16-7.2-16-16l0-64L16 32C7.2 32 0 24.8 0 16zM96 32l0 48 256 0 0-48L96 32zM64 160c0-8.8 7.2-16 16-16l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 176c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 240c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 304c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 368c-8.8 0-16-7.2-16-16zM16 512c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-64c0-8.8 7.2-16 16-16l288 0c8.8 0 16 7.2 16 16l0 64 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0L80 512l-64 0zm80-80l0 48 256 0 0-48L96 432z" />
    </Icon>
);

export default Reel;