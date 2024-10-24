
import { Icon } from "../../index";

/**
 * A component that renders the `circle-star` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-star?s=sharp-light circle-star}
 * @preview ![circle-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-star.svg)
 */
const CircleStar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm18.1-381.7L256 96l-18.1 34.3-30.8 58.4L142 199.9l-38.2 6.6 27 27.8 46 47.4-9.4 65.4L162 385.4l34.8-17.1L256 339.2l59.3 29.1L350 385.4l-5.5-38.4-9.4-65.4 46-47.4 27-27.8L370 199.9l-65.1-11.3-30.8-58.4zm25.4 89.9l43.5 7.5-30.8 31.7-11 11.3 2.2 15.6 6.3 43.7-39.6-19.5L256 303.5l-14.1 6.9L202.3 330l6.3-43.7 2.2-15.6-11-11.3L169 227.7l43.5-7.5 15.5-2.7 7.3-13.9 20.6-39 20.6 39 7.3 13.9 15.5 2.7z" />
    </Icon>
);

export default CircleStar;