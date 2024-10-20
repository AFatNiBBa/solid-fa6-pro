
import { Icon } from "../../index";

/**
 * A component that renders the `pickleball` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pickleball?s=light pickleball}
 * @preview ![pickleball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pickleball.svg)
 */
const Pickleball: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M363.6 50.7c-25-25-65.6-25-90.6 0L141 182.3 283.5 324.3c-4.5 11.3-7.8 23.2-9.7 35.5l-155.5-155-3.2 3.2c-13.8 13.7-17.9 34.4-10.4 52.3l24.9 59.8c10 23.9 4.5 51.5-13.9 69.8l-63 62.8c-6.3 6.2-6.3 16.3 0 22.6c6.3 6.2 16.4 6.2 22.7 0l63.3-63c18.3-18.2 45.7-23.7 69.6-13.9l58.5 24c3.4 1.4 6.9 2.4 10.5 3c3 11.4 7.3 22.2 12.6 32.4c-11.8 .7-23.9-1.2-35.3-5.8l-58.5-24c-12-4.9-25.7-2.2-34.8 7L98.1 498c-18.8 18.7-49.2 18.7-68 0s-18.8-49.1 0-67.8l63-62.8c9.2-9.2 11.9-22.9 6.9-34.9L75.1 272.7c-12.5-29.9-5.6-64.3 17.3-87.2L250.3 28.1c37.5-37.4 98.4-37.4 135.9 0L499.8 141.3c29.4 29.3 35.8 72.9 19.1 108.4c-8.9-5.8-18.5-10.7-28.5-14.7c10.4-23.5 6-51.9-13.3-71.1L363.6 50.7zm68.4 429.4a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-224a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm-64 128a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0-48a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm80 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm-64-64a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
    </Icon>
);

export default Pickleball;