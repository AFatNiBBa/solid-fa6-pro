
import { Icon } from "../../index";

/**
 * A component that renders the `ferris-wheel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ferris-wheel?s=sharp-solid ferris-wheel}
 * @preview ![ferris-wheel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ferris-wheel.svg)
 */
const FerrisWheel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 0L208 0l0 37.2c-24.2 5.3-46.9 14.5-67.4 26.8L64 64l0 48 0 28.6C51.6 161.1 42.4 183.8 37.2 208L0 208l0 48c0 22.7 15.7 41.7 36.9 46.7c5.2 24.7 14.5 47.8 27.1 68.7L64 400c0 25.5 19.8 46.3 44.9 47.9L160 352l-32 0c-15.5-20.7-26.2-45.3-30.2-72l81.9 0c-2.4-7.6-3.7-15.6-3.7-24s1.3-16.4 3.7-24l-81.9 0c4-26.3 14.3-50.4 29.4-70.9L185.1 219c7.6-14.5 19.5-26.4 33.9-33.9l-57.9-57.9c20.5-15.1 44.6-25.4 70.9-29.4l0 81.9c7.6-2.4 15.6-3.7 24-3.7s16.4 1.3 24 3.7l0-81.9c26.3 4 50.4 14.3 70.9 29.4L293 185.1c14.5 7.6 26.4 19.5 33.9 33.9l57.9-57.9c15.1 20.5 25.4 44.6 29.4 70.9l-81.9 0c2.4 7.6 3.7 15.6 3.7 24s-1.3 16.4-3.7 24l81.9 0c-4 26.7-14.7 51.3-30.2 72l-32 0 51.1 95.9c25-1.6 44.9-22.4 44.9-47.9l0-28.6c12.6-20.9 21.9-44.1 27.1-68.7c21.1-5 36.9-24 36.9-46.7l0-48-37.2 0c-5.3-24.2-14.5-46.9-26.8-67.4L448 64l-76.6 0C350.9 51.6 328.2 42.4 304 37.2L304 0zm0 256c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15.6 7.5 29.5 19 38.3L128 480l0 32 256 0 0-32L285 294.3c11.6-8.8 19-22.7 19-38.3z" />
    </Icon>
);

export default FerrisWheel;