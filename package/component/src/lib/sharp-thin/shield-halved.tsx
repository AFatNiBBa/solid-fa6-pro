
import { Icon } from "../../index";

/**
 * A component that renders the `shield-halved` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-halved?s=sharp-thin shield-halved}
 * @preview ![shield-halved](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shield-halved.svg)
 */
const ShieldHalved: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 20.3l0 470.8C155.1 450.3 99.8 379.5 68.5 307.5c-31.3-72.1-38.8-145.8-36-193.6l.6-10.3 9.6-3.7L248 20.3zm16 470.8l0-470.8L469.3 99.9l9.6 3.7 .6 10.3c2.8 47.8-4.7 121.5-36 193.6c-31.3 72-86.6 142.8-179.5 183.5zM495.5 113l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.3 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9z" />
    </Icon>
);

export default ShieldHalved;