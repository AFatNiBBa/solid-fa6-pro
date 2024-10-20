
import { Icon } from "../../index";

/**
 * A component that renders the `tricycle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tricycle?s=thin tricycle}
 * @preview ![tricycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tricycle.svg)
 */
const Tricycle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 32c-4.4 0-8 3.6-8 8s3.6 8 8 8l97.1 0C382.6 48 400 65.4 400 86.9c0 13-6.5 25.2-17.3 32.4L333.6 152l-34.3 0c-59.1 0-114.5 26.1-152.2 70.2L94.9 144l25.1 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l35.7 0 61 91.5c-2.7 3.8-5.3 7.7-7.8 11.7l-5.8 9.4c-3.7-.4-7.4-.6-11.2-.6C50.1 256 0 306.1 0 368s50.1 112 112 112s112-50.1 112-112c0-52.1-35.6-96-83.9-108.4l2.5-4c33.5-54.4 92.8-87.6 156.7-87.6l30.5 0 15.5 62C293.5 246.4 256 294.8 256 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-7.9 0-15.7 .7-23.2 2.1l-15.6-62.6 46.4-30.9c15.3-10.2 24.4-27.3 24.4-45.7C416 56.6 391.4 32 361.1 32L264 32zm85.1 213.5l27.1 108.4c1.1 4.3 5.4 6.9 9.7 5.8s6.9-5.4 5.8-9.7L364.7 241.7c6.3-1.1 12.7-1.7 19.3-1.7c61.9 0 112 50.1 112 112s-50.1 112-112 112s-112-50.1-112-112c0-49.7 32.4-91.8 77.1-106.5zM112 272a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Tricycle;