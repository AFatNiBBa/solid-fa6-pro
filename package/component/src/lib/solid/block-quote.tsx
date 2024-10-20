
import { Icon } from "../../index";

/**
 * A component that renders the `block-quote` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-quote?s=solid block-quote}
 * @preview ![block-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/block-quote.svg)
 */
const BlockQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 64zM160 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0zM128 416c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0c-17.7 0-32 14.3-32 32zM32 224c-17.7 0-32 14.3-32 32L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default BlockQuote;