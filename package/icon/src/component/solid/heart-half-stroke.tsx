
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half-stroke` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half-stroke?s=solid heart-half-stroke}
 * @preview ![heart-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/heart-half-stroke.svg)
 */
const HeartHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 186.5l0 220.9L420.7 253.6c17.4-16.2 27.3-38.9 27.3-62.7l0-5.8c0-38.6-27.9-71.5-66-77.9c-25.1-4.2-50.8 4-68.8 22l-12 12L256 186.5zM119.4 44.1C165 36.5 211.3 51.4 244 84c0 0 0 0 0 0l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1l0 5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4C17.2 272.1 0 232.4 0 190.9l0-5.8c0-69.9 50.5-129.5 119.4-141z" />
    </Icon>
);

export default HeartHalfStroke;