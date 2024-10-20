
import { Icon } from "../../index";

/**
 * A component that renders the `circle-star` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-star?s=sharp-thin circle-star}
 * @preview ![circle-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-star.svg)
 */
const CircleStar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm9-398.9L256 96l-9 17.1-39.9 75.5-84.2 14.6-19.1 3.3 13.5 13.9 59.5 61.3-12.2 84.5L162 385.4l17.4-8.6L256 339.2l76.6 37.7 17.4 8.6-2.8-19.2-12.2-84.5 59.5-61.3 13.5-13.9-19.1-3.3-84.2-14.6L265 113.1zm37.1 91.3l73.4 12.7-51.9 53.4-5.5 5.6 1.1 7.8 10.6 73.7-66.8-32.9-7.1-3.5-7.1 3.5-66.8 32.9L192.7 284l1.1-7.8-5.5-5.6-51.9-53.4 73.4-12.7 7.8-1.3 3.7-7L256 130.3l34.8 65.9 3.7 7 7.8 1.3z" />
    </Icon>
);

export default CircleStar;