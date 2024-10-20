
import { Icon } from "../../index";

/**
 * A component that renders the `square-rss` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-rss?s=light square-rss}
 * @preview ![square-rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-rss.svg)
 */
const SquareRss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM80 128c-8.8 0-16 7.2-16 16s7.2 16 16 16c132.5 0 240 107.5 240 240c0 8.8 7.2 16 16 16s16-7.2 16-16c0-150.2-121.8-272-272-272zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16c79.5 0 144 64.5 144 144c0 8.8 7.2 16 16 16s16-7.2 16-16c0-97.2-78.8-176-176-176z" />
    </Icon>
);

export default SquareRss;