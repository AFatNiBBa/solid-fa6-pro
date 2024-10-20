
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reel?s=duotone reel}
 * @preview ![reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/reel.svg)
 */
const Reel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 64l0 24c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24l0-24L64 64zm0 96c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 144c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16l352 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 208c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 272c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 336c-8.8 0-16 7.2-16 16zm0 72l0 24 320 0 0-24c0-13.3-10.7-24-24-24L88 400c-13.3 0-24 10.7-24 24z" />
        <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 0zm0 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default Reel;