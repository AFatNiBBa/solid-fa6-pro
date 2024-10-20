
import { Icon } from "../../index";

/**
 * A component that renders the `reel` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reel?s=solid reel}
 * @preview ![reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/reel.svg)
 */
const Reel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32C0 14.3 14.3 0 32 0L416 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 24c0 13.3-10.7 24-24 24L88 112c-13.3 0-24-10.7-24-24l0-24L32 64C14.3 64 0 49.7 0 32zM0 480c0-17.7 14.3-32 32-32l32 0 0-24c0-13.3 10.7-24 24-24l272 0c13.3 0 24 10.7 24 24l0 24 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32zM80 144l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 240c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 304c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default Reel;