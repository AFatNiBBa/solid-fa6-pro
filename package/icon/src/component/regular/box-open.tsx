
import { Icon } from "../../index";

/**
 * A component that renders the `box-open` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open?s=regular box-open}
 * @preview ![box-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/box-open.svg)
 */
const BoxOpen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M17.2 125.5c-9 17.9 .6 39.6 19.8 45.1l163.3 46.7c13.9 4 28.8-1.9 36.2-14.3L320 64 75.2 33.4c-6.7-.8-13.3 2.7-16.3 8.7L17.2 125.5zM320 64l83.4 139c7.4 12.4 22.3 18.3 36.2 14.3l163.3-46.7c19.3-5.5 28.8-27.2 19.8-45.1L581.1 42.1c-3-6.1-9.6-9.6-16.3-8.7L320 64zm-1.1 64l2.2 0s0 0 0 0l-2.2 0s0 0 0 0zM528 225.3l0 153.2-184 46L344 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 240.5-184-46 0-153.2L64 211.6l0 167c0 22 15 41.2 36.4 46.6l204.1 51c10.2 2.5 20.9 2.5 31 0l204.1-51c21.4-5.3 36.4-24.5 36.4-46.6l0-167-48 13.7z" />
    </Icon>
);

export default BoxOpen;