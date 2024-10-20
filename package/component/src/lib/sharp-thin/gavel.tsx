
import { Icon } from "../../index";

/**
 * A component that renders the `gavel` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gavel?s=sharp-thin gavel}
 * @preview ![gavel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gavel.svg)
 */
const Gavel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304.1 11.2l-5.7 5.7L291.3 24 488 220.7l7.1-7.1 5.7-5.7 11.3 11.3-5.7 5.7-12.8 12.8-112 112s0 0 0 0l-12.8 12.8-5.7 5.7-11.3-11.3 5.7-5.7 7.1-7.1L168 147.3l-7.1 7.1-5.7 5.7-11.3-11.3 5.7-5.7 12.8-12.8 112-112L287.1 5.5l5.7-5.7 11.3 11.3zM179.3 136L376 332.7 476.7 232 280 35.3 179.3 136zm-72 364.7L96 512 84.7 500.7 11.3 427.3 0 416l11.3-11.3L132.7 283.3 144 272l11.3 11.3 31 31 51.7-51.7 11.3 11.3-51.7 51.7 31 31L240 368l-11.3 11.3L107.3 500.7zM217.4 368L144 294.6 22.6 416 96 489.4 217.4 368z" />
    </Icon>
);

export default Gavel;