
import { Icon } from "../../index";

/**
 * A component that renders the `reel` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reel?s=regular reel}
 * @preview ![reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/reel.svg)
 */
const Reel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l40 0 0 40c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L384 0 344 0 104 0 64 0 24 0zm80 72l0-24 240 0 0 24L104 72zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 40 0 240 0 40 0 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-40c0-13.3-10.7-24-24-24L88 400c-13.3 0-24 10.7-24 24l0 40-40 0zm320 0l-240 0 0-24 240 0 0 24zM80 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 144zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l352 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 208zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 272zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 336z" />
    </Icon>
);

export default Reel;