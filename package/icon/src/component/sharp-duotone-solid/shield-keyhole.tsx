
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-keyhole` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-keyhole?s=sharp-duotone-solid shield-keyhole}
 * @preview ![shield-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shield-keyhole.svg)
 */
const ShieldKeyhole: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 133.1c0 49.1 9.5 115.6 37.9 180.9c32.7 75.2 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-.4 6.3-.6 13-.6 20.1zM200 208c0-30.9 25.1-56 56-56c15.5 0 29.5 6.3 39.6 16.4c5.1 5.1 9.2 11.1 12 17.8c1.4 3.3 2.5 6.9 3.3 10.5c.4 1.9 .7 3.8 .9 5.7c.1 .9 .2 1.9 .2 2.7c0 .9 .1 1.7 .1 2.9c0 .1 0 .3 0 .4c0 .5 0 1 0 1.6c0 0 0 .2 0 .4c0 .5-.1 1.1-.1 1.8c-.1 1.3-.3 2.7-.4 4.1c-.4 2.7-1 5.3-1.7 7.8c-1.5 5.1-3.7 9.9-6.6 14.2c-5.6 8.7-13.6 15.8-23.1 20.3c0 23.1 0 46.3 0 69.4c0 8 0 16 0 24l-48 0c0-8 0-16 0-24c0-23.1 0-46.3 0-69.4c-18.9-9-32-28.3-32-50.6z" />
        <path d="M280 258.6c18.9-9 32-28.3 32-50.6c0-30.9-25.1-56-56-56s-56 25.1-56 56c0 22.3 13.1 41.6 32 50.6l0 69.4 0 24 48 0 0-24 0-69.4z" />
    </Icon>
);

export default ShieldKeyhole;