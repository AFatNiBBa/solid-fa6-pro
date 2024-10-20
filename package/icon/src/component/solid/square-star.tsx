
import { Icon } from "../../index";

/**
 * A component that renders the `square-star` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-star?s=solid square-star}
 * @preview ![square-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-star.svg)
 */
const SquareStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 8c-6.1 0-11.7 3.5-14.3 8.9l-36.2 73.4-81 11.8c-6 .9-11 5.1-12.9 10.9s-.3 12.2 4 16.4l58.6 57.2-13.8 80.7c-1 6 1.4 12.1 6.4 15.6s11.5 4.1 16.8 1.2L224 342.1l72.5 38.1c5.4 2.8 11.9 2.4 16.8-1.2s7.4-9.6 6.4-15.6l-13.8-80.7 58.6-57.2c4.4-4.3 5.9-10.6 4-16.4s-6.9-10-12.9-10.9l-81.1-11.8-36.2-73.4c-2.7-5.5-8.3-8.9-14.3-8.9z" />
    </Icon>
);

export default SquareStar;