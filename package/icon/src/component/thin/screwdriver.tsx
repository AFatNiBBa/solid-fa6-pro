
import { Icon } from "../../index";

/**
 * A component that renders the `screwdriver` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver?s=thin screwdriver}
 * @preview ![screwdriver](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/screwdriver.svg)
 */
const Screwdriver: typeof Icon = x => (
    <Icon {...x}>
        <path d="M465 7l40 40c8.5 8.5 9.4 22 2.1 31.6l-80 104c-4.5 5.9-11.6 9.4-19 9.4l-64 0-8 0-4.7 0-72.6 72.6c-1.7-2-3.6-4-5.5-5.9s-3.9-3.7-5.9-5.5L320 180.7l0-4.7 0-8 0-64c0-7.5 3.5-14.5 9.4-19l104-80C442.9-2.4 456.4-1.5 465 7zM336 176l8 0 64 0c2.5 0 4.8-1.2 6.3-3.1l80-104c2.4-3.2 2.2-7.7-.7-10.5l-40-40c-2.8-2.8-7.4-3.1-10.5-.7l-104 80c-2 1.5-3.1 3.9-3.1 6.3l0 64 0 8zM219.3 292.7c-23.9-23.9-62.7-23.9-86.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l112-112c23.9-23.9 23.9-62.7 0-86.6zM9.4 438.6c-12.5-12.5-12.5-32.8 0-45.3l112-112c30.2-30.2 79.1-30.2 109.3 0s30.2 79.1 0 109.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0l-64-64z" />
    </Icon>
);

export default Screwdriver;