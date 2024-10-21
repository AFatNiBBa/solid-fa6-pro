
import { Icon } from "../../index";

/**
 * A component that renders the `down-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-right?s=light down-right}
 * @preview ![down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/down-right.svg)
 */
const DownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M312 384c4.4 0 8-3.6 8-8l0-201.4c0-3.7-3-6.6-6.6-6.6c-1.8 0-3.4 .7-4.7 1.9l-61.4 61.4c-6.2 6.2-16.4 6.2-22.6 0L112 118.6c-4.2-4.2-10-6.6-16-6.6s-11.8 2.4-16 6.6L54.6 144c-4.2 4.2-6.6 10-6.6 16s2.4 11.8 6.6 16L167.3 288.7c3 3 4.7 7.1 4.7 11.3s-1.7 8.3-4.7 11.3l-61.4 61.4c-1.2 1.2-1.9 2.9-1.9 4.7c0 3.7 3 6.6 6.6 6.6L312 384zm40-8c0 22.1-17.9 40-40 40l-201.4 0C89.3 416 72 398.7 72 377.4c0-10.2 4.1-20.1 11.3-27.3L133.4 300 32 198.6C21.8 188.4 16 174.5 16 160s5.8-28.4 16-38.6L57.4 96C67.6 85.8 81.5 80 96 80s28.4 5.8 38.6 16L236 197.4l50.1-50.1c7.2-7.2 17.1-11.3 27.3-11.3c21.3 0 38.6 17.3 38.6 38.6L352 376z" />
    </Icon>
);

export default DownRight;