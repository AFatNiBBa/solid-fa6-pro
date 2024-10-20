
import { Icon } from "../../index";

/**
 * A component that renders the `business-time` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/business-time?s=sharp-regular business-time}
 * @preview ![business-time](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/business-time.svg)
 */
const BusinessTime: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M152 0L128 0l0 24 0 72L48 96 0 96l0 48L0 280 0 432l0 48 48 0 312.2 0c-11.8-14.3-21.4-30.5-28.2-48L48 432l0-128 144 0 0 48 128.7 0c3.3-36.3 17.6-69.4 39.5-96l-8.2 0-160 0L48 256l0-112 104 0 208 0 104 0 0 50.9c10.4-1.9 21.1-2.9 32-2.9c5.4 0 10.7 .2 16 .7l0-48.7 0-48-48 0-80 0 0-72 0-24L360 0 152 0zM336 96L176 96l0-48 160 0 0 48zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM512 288l0 16 0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0z" />
    </Icon>
);

export default BusinessTime;