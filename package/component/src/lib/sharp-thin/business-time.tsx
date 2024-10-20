
import { Icon } from "../../index";

/**
 * A component that renders the `business-time` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/business-time?s=sharp-thin business-time}
 * @preview ![business-time](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/business-time.svg)
 */
const BusinessTime: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M136 0l-8 0 0 8 0 88L16 96 0 96l0 16L0 264 0 464l0 16 16 0 344.2 0c-4.2-5.1-8.1-10.4-11.8-16L16 464l0-192 160 0 0 64 0 16 16 0 128.7 0c.5-5.4 1.2-10.7 2.2-16L192 336l0-64 156.5 0c3.6-5.6 7.6-10.9 11.8-16l-8.2 0-160 0-16 0L16 256l0-144 120 0 240 0 120 0 0 80c5.4 0 10.7 .2 16 .7l0-80.7 0-16-16 0L384 96l0-88 0-8-8 0L136 0zM368 96L144 96l0-80 224 0 0 80zM496 240a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm8-224l-16 0 0 8 0 72 0 8 8 0 56 0 8 0 0-16-8 0-48 0 0-64 0-8z" />
    </Icon>
);

export default BusinessTime;