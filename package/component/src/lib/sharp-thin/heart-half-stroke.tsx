
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half-stroke` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half-stroke?s=sharp-thin heart-half-stroke}
 * @preview ![heart-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/heart-half-stroke.svg)
 */
const HeartHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 110.6l0 338.7L75.3 276.7 51.1 252.5C28.6 230 16 199.5 16 167.8C16 101.6 69.6 48 135.8 48c31.8 0 62.2 12.6 84.7 35.1l24.2 24.2 3.3 3.3zm16 338.7l0-338.7 3.3-3.3 24.2-24.2C314 60.6 344.5 48 376.2 48C442.4 48 496 101.6 496 167.8c0 31.8-12.6 62.2-35.1 84.7l-24.2 24.2L264 449.4zM256 480l11.3-11.3L448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8L267.3 84.7 256 96 244.7 84.7 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96L64 288 244.7 468.7 256 480z" />
    </Icon>
);

export default HeartHalfStroke;