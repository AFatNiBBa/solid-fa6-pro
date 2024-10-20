
import { Icon } from "../../index";

/**
 * A component that renders the `shuffle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuffle?s=sharp-thin shuffle}
 * @preview ![shuffle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shuffle.svg)
 */
const Shuffle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M410.3 458.3l-5.7 5.7L416 475.3l5.7-5.7 80-80 5.7-5.7-5.7-5.7-80-80-5.7-5.7L404.7 304l5.7 5.7L476.7 376 324 376 134.4 123.2 132 120l-4 0L8 120l-8 0 0 16 8 0 116 0L313.6 388.8 316 392l4 0 156.7 0-66.3 66.3zM134.4 388.8L204 296l-10-13.3L124 376 8 376l-8 0 0 16 8 0 120 0 4 0 2.4-3.2zM254 229.3L324 136l152.7 0-66.3 66.3-5.7 5.7L416 219.3l5.7-5.7 80-80 5.7-5.7-5.7-5.7-80-80L416 36.7 404.7 48l5.7 5.7L476.7 120 320 120l-4 0-2.4 3.2L244 216l10 13.3z" />
    </Icon>
);

export default Shuffle;