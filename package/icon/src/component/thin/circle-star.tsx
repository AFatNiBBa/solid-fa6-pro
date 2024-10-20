
import { Icon } from "../../index";

/**
 * A component that renders the `circle-star` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-star?s=thin circle-star}
 * @preview ![circle-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-star.svg)
 */
const CircleStar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM207.7 202.2c5.2-.8 9.7-4 12-8.8L256 120l36.2 73.4c2.3 4.7 6.8 8 12 8.8L385.3 214l-58.6 57.2c-3.8 3.7-5.5 9-4.6 14.2L335.9 366l-72.5-38.1c-4.7-2.5-10.2-2.5-14.9 0L176.1 366l13.8-80.7c.9-5.2-.8-10.5-4.6-14.2L126.7 214l81-11.8zm179.9-4.1l-81.1-11.8-36.2-73.4c-2.7-5.5-8.3-8.9-14.3-8.9s-11.7 3.5-14.3 8.9l-36.2 73.4-81 11.8c-6 .9-11 5.1-12.9 10.9s-.3 12.2 4 16.4l58.6 57.2-13.8 80.7c-1 6 1.4 12.1 6.4 15.6s11.5 4.1 16.8 1.2L256 342.1l72.5 38.1c5.4 2.8 11.9 2.4 16.9-1.2s7.4-9.6 6.4-15.6l-13.8-80.7 58.6-57.2c4.4-4.3 5.9-10.6 4-16.4s-6.9-10-12.9-10.9z" />
    </Icon>
);

export default CircleStar;