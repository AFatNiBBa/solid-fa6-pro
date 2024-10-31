
import { Icon } from "../../index";

/**
 * A component that renders the `bicycle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bicycle?s=sharp-thin bicycle}
 * @preview ![bicycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bicycle.svg)
 */
const Bicycle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M296 32l-8 0 0 16 8 0 51.1 0 57.4 112-198.9 0L166.7 99.7 164.4 96 160 96l-56 0-8 0 0 16 8 0 51.6 0 36.4 56.5-26.9 61c-11.8-3.6-24.3-5.5-37.2-5.5C57.3 224 0 281.3 0 352s57.3 128 128 128c68 0 123.6-53 127.8-120l64.2 0 4.8 0 2.2-4.3 89.7-171.9L446.6 242C409.1 264.3 384 305.2 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-18.2 0-35.5 3.8-51.2 10.6L359.1 36.3 356.9 32 352 32l-56 0zM453.9 256.2l51 99.4 3.7 7.1 14.2-7.3-3.6-7.1-51-99.4c13.5-5.7 28.3-8.9 43.9-8.9c61.9 0 112 50.1 112 112s-50.1 112-112 112s-112-50.1-112-112c0-40.6 21.6-76.1 53.9-95.8zm-295.2-12l-46 104.5L120 360l119.7 0c-4.1 58.1-52.6 104-111.7 104C66.1 464 16 413.9 16 352s50.1-112 112-112c10.7 0 20.9 1.5 30.7 4.3zM132.3 344l70.2-159.4L305.3 344l-173.1 0zM216 176l186.8 0L319.3 336.1 216 176z" />
    </Icon>
);

export default Bicycle;