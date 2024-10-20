
import { Icon } from "../../index";

/**
 * A component that renders the `tricycle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tricycle?s=sharp-thin tricycle}
 * @preview ![tricycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tricycle.svg)
 */
const Tricycle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 32l-8 0 0 16 8 0 136 0 0 59.7L333.6 152l-34.3 0c-59.1 0-114.5 26.1-152.2 70.2L94.9 144l25.1 0 8 0 0-16-8 0-80 0-8 0 0 16 8 0 35.7 0 61 91.5c-2.7 3.8-5.3 7.7-7.8 11.7l-5.8 9.4c-3.7-.4-7.4-.6-11.2-.6C50.1 256 0 306.1 0 368s50.1 112 112 112s112-50.1 112-112c0-52.1-35.6-96-83.9-108.4l2.5-4c33.5-54.4 92.8-87.6 156.7-87.6l30.5 0 15.5 62C293.5 246.4 256 294.8 256 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-7.9 0-15.7 .7-23.2 2.1l-15.6-62.6 67.3-44.9 3.6-2.4 0-4.3 0-72 0-8-8 0L264 32zm85.1 213.5l27.1 108.4 1.9 7.8 15.5-3.9-1.9-7.8L364.7 241.7c6.3-1.1 12.7-1.7 19.3-1.7c61.9 0 112 50.1 112 112s-50.1 112-112 112s-112-50.1-112-112c0-49.7 32.4-91.8 77.1-106.5zM112 272a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Tricycle;