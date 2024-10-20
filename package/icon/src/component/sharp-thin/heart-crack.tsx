
import { Icon } from "../../index";

/**
 * A component that renders the `heart-crack` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-crack?s=sharp-thin heart-crack}
 * @preview ![heart-crack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/heart-crack.svg)
 */
const HeartCrack: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 110.6l0 33.4 0 3.3 2.3 2.3 41.1 41.1-87.9 58.6-7.3 4.8 5.5 6.8 64 80 5 6.2 12.5-10-5-6.2-58.5-73.2 88.7-59.2 8.1-5.4-6.9-6.9L264 140.7l0-30 3.3-3.3 24.2-24.2C314 60.6 344.5 48 376.2 48C442.4 48 496 101.6 496 167.8c0 31.8-12.6 62.2-35.1 84.7l-24.2 24.2L256 457.4 75.3 276.7 51.1 252.5C28.6 230 16 199.5 16 167.8C16 101.6 69.6 48 135.8 48c31.8 0 62.2 12.6 84.7 35.1l24.2 24.2 3.3 3.3zM256 480l11.3-11.3L448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8L267.3 84.7 256 96 244.7 84.7 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96L64 288 244.7 468.7 256 480z" />
    </Icon>
);

export default HeartCrack;