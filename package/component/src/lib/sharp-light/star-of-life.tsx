
import { Icon } from "../../index";

/**
 * A component that renders the `star-of-life` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-life?s=sharp-light star-of-life}
 * @preview ![star-of-life](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/star-of-life.svg)
 */
const StarOfLife: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 0l16 0 96 0 16 0 0 16 0 129.1L431.8 80.6l13.9-8 8 13.9 48 83.1 8 13.9-13.9 8L384 256l111.8 64.6 13.9 8-8 13.9-48 83.1-8 13.9-13.9-8L320 366.9 320 496l0 16-16 0-96 0-16 0 0-16 0-129.1L80.2 431.4l-13.9 8-8-13.9-48-83.1-8-13.9 13.9-8L128 256 16.2 191.4l-13.9-8 8-13.9 48-83.1 8-13.9 13.9 8L192 145.1 192 16l0-16zm32 32l0 140.9 0 27.7-24-13.9L78 116.3 46 171.7l122 70.4L192 256l-24 13.9L46 340.3l32 55.4 122-70.4 24-13.9 0 27.7L224 480l64 0 0-140.9 0-27.7 24 13.9 122 70.4 32-55.4L344 269.9 320 256l24-13.9 122-70.4-32-55.4L312 186.7l-24 13.9 0-27.7L288 32l-64 0z" />
    </Icon>
);

export default StarOfLife;