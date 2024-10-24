
import { Icon } from "../../index";

/**
 * A component that renders the `wand` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand?s=sharp-thin wand}
 * @preview ![wand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/wand.svg)
 */
const Wand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M378.6 176l7 0 30.5 0 0-34 0-6.3 4.3-4.6 69.5-74.7L455.6 22.2l-264 245.5L187 272l-6.3 0L128 272l0 47.9 0 7-5.1 4.7L23 424.4 87.6 489 373.8 181.1l4.7-5.1zM98.9 500.3L88 512 76.7 500.7 11.3 435.3 0 424l11.7-10.9L112 319.9l0-47.9 0-16 16 0 52.7 0L456 0l56 56-80 86 0 34 0 16-16 0-30.5 0L98.9 500.3z" />
    </Icon>
);

export default Wand;