
import { Icon } from "../../index";

/**
 * A component that renders the `house-heart` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-heart?s=light house-heart}
 * @preview ![house-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/house-heart.svg)
 */
const HouseHeart: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235l0 197c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-197 37.4 33c6.6 5.8 16.7 5.2 22.6-1.4s5.2-16.7-1.4-22.6L298.6 4zM96 432l0-225.3L288 37.3 480 206.7 480 432c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48zM208 285.3c0-16.2 13.1-29.3 29.3-29.3c7.8 0 15.2 3.1 20.7 8.6l18.7 18.7c6.2 6.2 16.4 6.2 22.6 0l18.7-18.7c5.5-5.5 12.9-8.6 20.7-8.6c16.2 0 29.3 13.1 29.3 29.3c0 7.8-3.1 15.2-8.6 20.7L288 377.4l-71.4-71.4c-5.5-5.5-8.6-12.9-8.6-20.7zM237.3 224c-33.8 0-61.3 27.4-61.3 61.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3c0-33.8-27.4-61.3-61.3-61.3c-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9z" />
    </Icon>
);

export default HouseHeart;