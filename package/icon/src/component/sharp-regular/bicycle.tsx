
import { Icon } from "../../index";

/**
 * A component that renders the `bicycle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bicycle?s=sharp-regular bicycle}
 * @preview ![bicycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bicycle.svg)
 */
const Bicycle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M312 32l-24 0 0 48 24 0 25.7 0 34.6 64-149.4 0-27.4-38-7.2-10L176 96l-56 0L96 96l0 48 24 0 43.7 0 22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112l49 0 13.7 0 7-11.8 84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L373.1 44.6 366.3 32 352 32l-40 0zM454.6 296.3l36.3 67.1 11.4 21.1 42.2-22.8-11.4-21.1-36.3-67.1c4.9-.9 10-1.4 15.2-1.4c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80c0-21.7 8.6-41.3 22.6-55.7zM136.9 272.5l-30.4 60.8L128 368l78.4 0c-7.4 36.5-39.7 64-78.4 64c-44.2 0-80-35.8-80-80s35.8-80 80-80c3 0 6 .2 8.9 .5zM166.8 320l50.7-101.3 72.9 101.2-.1 .1-123.5 0zm90.6-128l108.5 0L317 274.8 257.4 192z" />
    </Icon>
);

export default Bicycle;