
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half?s=regular heart-half}
 * @preview ![heart-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/heart-half.svg)
 */
const HeartHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M236.7 476.9c2.1 2 4.9 3.1 7.8 3.1c6.3 0 11.5-5.1 11.5-11.5l0-12.3 0-22.4 0-4.6L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1l0 5.8c0 41.5 17.2 81.2 47.6 109.5L208 450.1l3.3 3.1 16.4 15.3 9 8.4zM208 384.5L80.3 265.3C59.7 246.1 48 219.1 48 190.9l0-5.8c0-46.4 33.6-86 79.3-93.6c29.3-4.9 59.1 4.2 80.7 24.5l0 268.5z" />
    </Icon>
);

export default HeartHalf;