
import { Icon } from "../../index";

/**
 * A component that renders the `melon-slice` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/melon-slice?s=sharp-thin melon-slice}
 * @preview ![melon-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/melon-slice.svg)
 */
const MelonSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 352c-8.1 0-16.2-.4-24.1-1.3L75 379.6c37.8 32.6 87.1 52.4 141 52.4c119.3 0 216-96.7 216-216c0-53.9-19.7-103.2-52.4-141l-28.9 28.9c.8 7.9 1.3 16 1.3 24.1c0 123.7-100.3 224-224 224zM63.7 391L24.6 430c49.8 41.2 113.7 66 183.4 66c159.1 0 288-128.9 288-288c0-69.7-24.7-133.6-66-183.4L391 63.7c35.5 40.8 57 94 57 152.3c0 128.1-103.9 232-232 232c-58.3 0-111.6-21.5-152.3-57zM336 128c0-10.1-.7-20.1-2.1-29.9l85.6-85.6L430.8 1.2c3.6 3.9 7.2 7.9 10.6 12C485.5 66 512 133.9 512 208c0 167.9-136.1 304-304 304c-74.1 0-142-26.5-194.8-70.6c-4.1-3.4-8.1-7-12-10.6l11.3-11.3 85.6-85.6c9.8 1.4 19.7 2.1 29.9 2.1c114.9 0 208-93.1 208-208z" />
    </Icon>
);

export default MelonSlice;