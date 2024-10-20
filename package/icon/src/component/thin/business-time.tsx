
import { Icon } from "../../index";

/**
 * A component that renders the `business-time` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/business-time?s=thin business-time}
 * @preview ![business-time](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/business-time.svg)
 */
const BusinessTime: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 40l0 56 224 0 0-56c0-13.3-10.7-24-24-24L168 16c-13.3 0-24 10.7-24 24zM128 96l0-56c0-22.1 17.9-40 40-40L344 0c22.1 0 40 17.9 40 40l0 56 64 0c35.3 0 64 28.7 64 64l0 32.7c-5.3-.5-10.6-.7-16-.7l0-32c0-26.5-21.5-48-48-48l-72 0-240 0-72 0c-26.5 0-48 21.5-48 48l0 96 160 0 16 0 160 0 8.2 0c-4.2 5.1-8.1 10.4-11.8 16L192 272l0 48c0 8.8 7.2 16 16 16l114.9 0c-1 5.3-1.7 10.6-2.2 16L208 352c-17.7 0-32-14.3-32-32l0-48L16 272l0 144c0 26.5 21.5 48 48 48l284.5 0c3.6 5.6 7.6 10.9 11.8 16L64 480c-35.3 0-64-28.7-64-64L0 264 0 160c0-35.3 28.7-64 64-64l64 0zM496 496a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 64c4.4 0 8 3.6 8 8l0 64 48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56 0c-4.4 0-8-3.6-8-8l0-72c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default BusinessTime;