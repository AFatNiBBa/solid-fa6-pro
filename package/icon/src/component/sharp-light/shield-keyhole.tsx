
import { Icon } from "../../index";

/**
 * A component that renders the `shield-keyhole` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-keyhole?s=sharp-light shield-keyhole}
 * @preview ![shield-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shield-keyhole.svg)
 */
const ShieldKeyhole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48.5 114.9L256 34.3l207.5 80.5c2.7 45.6-4.5 116.8-34.7 186.3S345.4 438.4 256 477.1C166.6 438.4 113.4 370.7 83.2 301.2S45.8 160.5 48.5 114.9zm447-1.9l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.3 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9zM256 184a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24c0-30.9-25.1-56-56-56s-56 25.1-56 56c0 25.4 16.9 46.8 40 53.7l0 74.3 0 16 32 0 0-16 0-74.3c23.1-6.9 40-28.3 40-53.7z" />
    </Icon>
);

export default ShieldKeyhole;