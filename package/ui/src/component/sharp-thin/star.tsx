
import { Icon } from "../../index";

/**
 * A component that renders the `star` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star?s=sharp-thin star}
 * @preview ![star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/star.svg)
 */
const Star: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M374.6 164L297.1 17.1 288.1 0l-9 17.1L201.5 164 38 192.3l-19.1 3.3 13.5 13.9 115.7 119L124.5 492.8 121.7 512l17.4-8.6 149-73.2 149 73.2 17.4 8.6-2.8-19.2L428 328.5l115.7-119 13.5-13.9-19.1-3.3L374.6 164zm150.1 42.2L416.6 317.4l-5.5 5.6 1.1 7.8 22.1 153.5L295.1 415.8l-7.1-3.5-7.1 3.5L141.9 484.3l22.1-153.5L165 323l-5.5-5.6L51.5 206.2l152.8-26.4 7.8-1.3 3.7-7L288.1 34.3l72.4 137.1 3.7 7 7.8 1.3 152.8 26.4z" />
    </Icon>
);

export default Star;