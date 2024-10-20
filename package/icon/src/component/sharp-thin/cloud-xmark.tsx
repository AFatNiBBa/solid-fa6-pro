
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-xmark?s=sharp-thin cloud-xmark}
 * @preview ![cloud-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cloud-xmark.svg)
 */
const CloudXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M528 228l0-36c0-44.2-35.8-80-80-80c-16.5 0-31.7 5-44.4 13.5L389.4 135l-8.5-14.8C355.9 77 309.3 48 256 48c-79.5 0-144 64.5-144 144l0 8.2 0 11.3-10.7 3.8C51.6 232.9 16 280.3 16 336l0 128 128 0 368 0 112 0 0-112c0-52.2-35.7-96-84-108.5l-12-3.1 0-12.4zM0 336c0-62.7 40.1-116 96-135.8l0-8.2c0-88.4 71.6-160 160-160c53.6 0 101 26.3 130 66.7c3.1 4.3 6 8.8 8.7 13.4c3.5-2.4 7.2-4.5 11-6.4C418.5 99.5 432.8 96 448 96c53 0 96 43 96 96l0 36c55.2 14.2 96 64.3 96 124l0 112 0 16-16 0-112 0-368 0L16 480 0 480l0-16L0 336zM249.8 206.5l5.7 5.7L320 276.7l64.6-64.6 5.7-5.7 11.3 11.3-5.7 5.7L331.3 288l64.6 64.6 5.7 5.7-11.3 11.3-5.7-5.7L320 299.3l-64.6 64.6-5.7 5.7-11.3-11.3 5.7-5.7L308.7 288l-64.6-64.6-5.7-5.7 11.3-11.3z" />
    </Icon>
);

export default CloudXmark;