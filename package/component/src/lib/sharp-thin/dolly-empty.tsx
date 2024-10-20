
import { Icon } from "../../index";

/**
 * A component that renders the `dolly-empty` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly-empty?s=sharp-thin dolly-empty}
 * @preview ![dolly-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dolly-empty.svg)
 */
const DollyEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L8 0 120 0c3.5 0 6.6 2.3 7.6 5.6L247 384.6c3-.4 6-.6 9-.6c23.2 0 43.5 12.3 54.7 30.8l254.9-78.4 7.6-2.4 4.7 15.3-7.6 2.4L317.3 429.5c1.8 5.9 2.7 12.1 2.7 18.5c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26.7 16.3-49.5 39.5-59.1L114.1 16 8 16 0 16 0 0zM304 448a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default DollyEmpty;