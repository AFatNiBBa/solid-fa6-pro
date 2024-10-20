
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half?s=light heart-half}
 * @preview ![heart-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/heart-half.svg)
 */
const HeartHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 451.5l0-.3L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1l0 5.8c0 41.5 17.2 81.2 47.6 109.5L224 465.1l.3 .2 3.5 3.2 9 8.4c2.1 2 4.9 3.1 7.8 3.1c6.3 0 11.5-5.1 11.5-11.5l0-12.3 0-4.7zm-32-30.2L69.4 277C45.6 254.7 32 223.6 32 190.9l0-5.8c0-54.2 39.2-100.5 92.7-109.4c35.3-5.9 71.4 5.6 96.7 31l2.6 2.6 0 312z" />
    </Icon>
);

export default HeartHalf;