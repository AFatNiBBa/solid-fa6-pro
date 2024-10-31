
import { Icon } from "../../index";

/**
 * A component that renders the `business-time` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/business-time?s=regular business-time}
 * @preview ![business-time](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/business-time.svg)
 */
const BusinessTime: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 56l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 48c-4.4 0-8 3.6-8 8zM128 96l0-40c0-30.9 25.1-56 56-56L328 0c30.9 0 56 25.1 56 56l0 40 64 0c35.3 0 64 28.7 64 64l0 32.7c-5.3-.5-10.6-.7-16-.7c-10.9 0-21.6 1-32 2.9l0-34.9c0-8.8-7.2-16-16-16l-88 0-208 0-88 0c-8.8 0-16 7.2-16 16l0 96 144 0 160 0 8.2 0c-21.9 26.6-36.2 59.7-39.5 96l-.7 0-96 0c-17.7 0-32-14.3-32-32l0-16L48 304l0 112c0 8.8 7.2 16 16 16l268 0c6.9 17.5 16.4 33.7 28.2 48L64 480c-35.3 0-64-28.7-64-64L0 280 0 160c0-35.3 28.7-64 64-64l64 0zM352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-48c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default BusinessTime;