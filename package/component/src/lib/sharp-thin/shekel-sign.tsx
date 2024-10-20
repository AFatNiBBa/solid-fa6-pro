
import { Icon } from "../../index";

/**
 * A component that renders the `shekel-sign` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shekel-sign?s=sharp-thin shekel-sign}
 * @preview ![shekel-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shekel-sign.svg)
 */
const ShekelSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 32l-8 0 0 8 0 432 0 8 16 0 0-8L32 48l160 0c48.6 0 88 39.4 88 88l0 216 0 8 16 0 0-8 0-216c0-57.4-46.6-104-104-104L24 32zM328 480c57.4 0 104-46.6 104-104l0-336 0-8-16 0 0 8 0 336c0 48.6-39.4 88-88 88l-160 0 0-296 0-8-16 0 0 8 0 304 0 8 8 0 168 0z" />
    </Icon>
);

export default ShekelSign;