
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-halved` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-halved?s=sharp-duotone-solid shield-halved}
 * @preview ![shield-halved](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shield-halved.svg)
 */
const ShieldHalved: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256.7 0c3.9 1.5 7.7 3 11.6 4.5L475.8 85 495 92.5l1.2 20.5c.4 6.3 .6 13 .6 20.1c0 49.1-9.5 115.6-37.9 180.8c-32.7 75.3-91 150-189.4 192.6c-4.2 1.8-8.5 3.7-12.7 5.5l0-512z" />
        <path d="M256 0s0 0 0 0L244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.3 91 150 189.4 192.6L256 512s0 0 0 0L256 0z" />
    </Icon>
);

export default ShieldHalved;