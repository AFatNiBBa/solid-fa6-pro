
import { Icon } from "../../index";

/**
 * A component that renders the `shield-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-xmark?s=sharp-thin shield-xmark}
 * @preview ![shield-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shield-xmark.svg)
 */
const ShieldXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M250.2 19.4l5.8-2.2 5.8 2.2L469.3 99.9l9.6 3.7 .6 10.3c2.8 47.8-4.7 121.5-36 193.6C412 379.9 356.2 451.2 262.4 491.8l-6.4 2.7-6.4-2.7C155.8 451.2 100 379.9 68.5 307.5c-31.3-72.1-38.8-145.8-36-193.6l.6-10.3 9.6-3.7L250.2 19.4zM495.5 113l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.3 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9zM185.8 174.5l-11.3 11.3 5.7 5.7L244.7 256l-64.6 64.6-5.7 5.7 11.3 11.3 5.7-5.7L256 267.3l64.6 64.6 5.7 5.7 11.3-11.3-5.7-5.7L267.3 256l64.6-64.6 5.7-5.7-11.3-11.3-5.7 5.7L256 244.7l-64.6-64.6-5.7-5.7z" />
    </Icon>
);

export default ShieldXmark;