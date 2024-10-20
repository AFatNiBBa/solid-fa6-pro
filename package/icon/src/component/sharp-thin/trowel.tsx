
import { Icon } from "../../index";

/**
 * A component that renders the `trowel` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trowel?s=sharp-thin trowel}
 * @preview ![trowel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/trowel.svg)
 */
const Trowel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M387.3 220.7L376 232l-11.3-11.3-73.4-73.4L280 136l11.3-11.3L404.7 11.3 416 0l11.3 11.3 73.4 73.4L512 96l-11.3 11.3L387.3 220.7zM489.4 96L416 22.6 302.6 136 376 209.4 489.4 96zm-279 194.3l112-112 11.3 11.3-112 112 87 87L320 400l-11.3 11.3L280 440 17.7 507.4 0 512l4.5-17.7L72 232l28.7-28.7L112 192l11.3 11.3 87 87zm61.4 135.3L297.4 400 112 214.6 86.4 240.2 22.2 489.8l249.5-64.2z" />
    </Icon>
);

export default Trowel;