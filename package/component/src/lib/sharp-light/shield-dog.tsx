
import { Icon } from "../../index";

/**
 * A component that renders the `shield-dog` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-dog?s=sharp-light shield-dog}
 * @preview ![shield-dog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shield-dog.svg)
 */
const ShieldDog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48.5 114.9L256 34.3l207.5 80.5c2.7 45.6-4.5 116.8-34.7 186.3S345.4 438.4 256 477.1C166.6 438.4 113.4 370.7 83.2 301.2S45.8 160.5 48.5 114.9zm447-1.9l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.3 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9zM152 128l-32 0 0 32 0 56c0 22.6 13.4 42.1 32.7 50.9l-15 29.9-7.2 14.3 28.6 14.3 7.2-14.3L186.4 271c26-4.9 45.6-27.7 45.6-55l0-56 60.2 0 9.9 0 11.6 23.2 4.4 8.8 9.9 0 56 0 0 16c0 35.3-28.7 64-64 64l-48 0-16 0 0 16 0 80 0 16 32 0 0-16 0-64 32 0c53 0 96-43 96-96l0-32 0-16-16 0-62.1 0-11.6-23.2-4.4-8.8-9.9 0-19.8 0L232 128l-16 0-16 0-48 0zm32 32l16 0 0 32 0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24 0-32 16 0 16 0zm88 48a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default ShieldDog;