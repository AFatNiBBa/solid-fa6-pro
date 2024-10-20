
import { Icon } from "../../index";

/**
 * A component that renders the `meter-bolt` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-bolt?s=solid meter-bolt}
 * @preview ![meter-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/meter-bolt.svg)
 */
const MeterBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 512c73.7 0 140.1-31.1 186.8-81l7.5-15L432 416c-20.4 0-38.5-12.9-45.3-32.1s-.6-40.6 15.3-53.4l109.6-87.7C504.8 107.5 393 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512zM192 160l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32zm96 0l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32zm96 0l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32zm218.1 67.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7l70.1 0L449.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7l-70.1 0 52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6z" />
    </Icon>
);

export default MeterBolt;