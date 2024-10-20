
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half-stroke` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half-stroke?s=regular heart-half-stroke}
 * @preview ![heart-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/heart-half-stroke.svg)
 */
const HeartHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M223.3 465.9l2.5 2.3c8.2 7.6 19 11.9 30.2 11.9s22-4.2 30.2-11.9l2.5-2.3L463.9 303.2c30.7-28.5 48.1-68.5 48.1-110.4l0-3.3c0-70.4-50-130.8-119.2-144C353.4 37.9 313.1 47 281 69.6c0 0 0 0 0 0c-4 2.8-7.8 5.8-11.5 9c-4.7 4.1-9.3 8.5-13.5 13.3c-7.5-8.4-15.9-15.9-25-22.3C198.9 47 158.6 37.9 119.2 45.4C50 58.6 0 119.1 0 189.5l0 3.3c0 41.9 17.4 81.9 48.1 110.4L223.3 465.9zM256 430.7L256 152c6.4 0 12.4-2.5 16.9-7c.4-.3 .7-.7 1-1.1l17.8-20c0 0 0 0 .1-.1s0 0 .1-.1c23.1-25.9 58-37.7 92-31.2c46.5 8.9 80.1 49.5 80.1 96.9l0 3.3c0 28.5-11.9 55.8-32.8 75.2L256 430.7z" />
    </Icon>
);

export default HeartHalfStroke;