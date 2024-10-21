
import { Icon } from "../../index";

/**
 * A component that renders the `anchor` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor?s=sharp-thin anchor}
 * @preview ![anchor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/anchor.svg)
 */
const Anchor: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 80A64 64 0 1 1 224 80a64 64 0 1 1 128 0zM288 0c-44.2 0-80 35.8-80 80c0 41.5 31.6 75.6 72 79.6c0 .1 0 .3 0 .4l0 48-80 0-8 0 0 16 8 0 80 0 0 272L88 496l0-204.7 58.3 58.3 11.3-11.3-72-72L80 260.7l-5.6 5.6s0 0 0 0l-72 72 11.3 11.3L72 291.3 72 504l0 8 8 0 208 0 208 0 8 0 0-8 0-212.7 58.3 58.3 11.3-11.3-72-72c0 0 0 0 0 0l-5.6-5.6-5.7 5.7-72 72 11.3 11.3L488 291.3 488 496l-192 0 0-272 80 0 8 0 0-16-8 0-80 0 0-48c0-.1 0-.3 0-.4c40.4-4 72-38.1 72-79.6c0-44.2-35.8-80-80-80z" />
    </Icon>
);

export default Anchor;