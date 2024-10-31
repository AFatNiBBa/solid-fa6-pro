
import { Icon } from "../../index";

/**
 * A component that renders the `square-star` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-star?s=sharp-thin square-star}
 * @preview ![square-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-star.svg)
 */
const SquareStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm233 81.1l39.9 75.5 84.2 14.6 19.1 3.3-13.5 13.9-59.5 61.3 12.2 84.5 2.8 19.2-17.4-8.6L224 339.2l-76.7 37.7L130 385.4l2.8-19.2 12.2-84.5L85.3 220.5 71.8 206.6l19.1-3.3 84.2-14.6L215 113.1 224 96l9 17.1zm37.1 91.3l-7.8-1.3-3.7-7L224 130.3l-34.8 65.9-3.7 7-7.8 1.3-73.4 12.7 51.9 53.4 5.5 5.6-1.1 7.8-10.6 73.7 66.8-32.9 7.1-3.5 7.1 3.5 66.8 32.9L287.3 284l-1.1-7.8 5.5-5.6 51.9-53.4-73.4-12.7z" />
    </Icon>
);

export default SquareStar;