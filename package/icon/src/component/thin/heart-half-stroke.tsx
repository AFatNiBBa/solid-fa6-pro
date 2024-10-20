
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half-stroke` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half-stroke?s=thin heart-half-stroke}
 * @preview ![heart-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/heart-half-stroke.svg)
 */
const HeartHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M282.4 105.2c25.4-34.9 68.3-53.2 111.2-47.6C451.9 65.3 496 115 496 173.6c0 30.3-11.7 59.3-32.8 81.1L264.7 460.4c-.2 .2-.5 .5-.7 .7l0-330.5 18.4-25.4zM248 130.6l0 329.9c0 0 0 0 0 0L48.9 254.7C27.8 232.9 16 203.8 16 173.5C16 114.9 60.1 65.3 118.3 57.7c42.9-5.6 85.8 12.6 111.2 47.6L248 130.6zM395.7 41.8c-48.6-6.3-97.3 14.3-126.2 54L256 114.4 242.5 95.8c-28.9-39.7-77.6-60.4-126.2-54C50.2 50.4 0 106.8 0 173.5c0 34.5 13.4 67.6 37.4 92.3L236.5 471.6c5.2 5.4 12.4 8.4 19.9 8.4c7.5 0 14.7-3 19.9-8.5L474.8 265.8C498.6 241.1 512 208 512 173.6c0-66.8-50.2-123.2-116.3-131.8z" />
    </Icon>
);

export default HeartHalfStroke;