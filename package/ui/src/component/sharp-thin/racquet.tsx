
import { Icon } from "../../index";

/**
 * A component that renders the `racquet` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/racquet?s=sharp-thin racquet}
 * @preview ![racquet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/racquet.svg)
 */
const Racquet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M349 16c39.2 0 77 13.5 105.3 41.8S496 123.8 496 163c0 49.6-21.5 101.9-62.3 142.7c-72.2 72.2-183.4 85.1-248 20.5C157.5 297.9 144 260.2 144 221c0-49.6 21.5-101.9 62.3-142.7S299.3 16 349 16zm0-16c-54.2 0-110.5 23.4-154 66.9s-67 99.8-66.9 154c0 40.3 13.1 79.8 40.9 110.8l-30.6 30.6-23-23L104 328 92.7 339.3 11.3 420.7 0 432l11.3 11.3 57.4 57.4L80 512l11.3-11.3 81.4-81.4L184 408l-11.3-11.3-23-23 30.6-30.6c73.3 66.3 190.4 48.3 264.8-26c43.6-43.6 67-99.8 66.9-154c0-42.8-14.8-84.9-46.5-116.6S391.8 0 349 0zM104 350.6L161.4 408 80 489.4 22.6 432 104 350.6z" />
    </Icon>
);

export default Racquet;