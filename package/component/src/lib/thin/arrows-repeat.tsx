
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-repeat` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-repeat?s=thin arrows-repeat}
 * @preview ![arrows-repeat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrows-repeat.svg)
 */
const ArrowsRepeat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 264c0 4.4 3.6 8 8 8s8-3.6 8-8l0-8c0-83.9 68.1-152 152-152l251.4 0-80.8 74.1c-3.3 3-3.5 8-.5 11.3s8 3.5 11.3 .5l96-88c1.7-1.5 2.6-3.7 2.6-5.9s-.9-4.4-2.6-5.9l-96-88c-3.3-3-8.3-2.8-11.3 .5s-2.8 8.3 .5 11.3L419.4 88 168 88C75.2 88 0 163.2 0 256l0 8zm512-16c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 8c0 83.9-68.1 152-152 152L92.6 408l80.8-74.1c3.3-3 3.5-8 .5-11.3s-8-3.5-11.3-.5l-96 88c-1.7 1.5-2.6 3.7-2.6 5.9s.9 4.4 2.6 5.9l96 88c3.3 3 8.3 2.8 11.3-.5s2.8-8.3-.5-11.3L92.6 424 344 424c92.8 0 168-75.2 168-168l0-8z" />
    </Icon>
);

export default ArrowsRepeat;