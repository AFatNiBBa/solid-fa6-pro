
import { Icon } from "../../index";

/**
 * A component that renders the `car-tunnel` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-tunnel?s=thin car-tunnel}
 * @preview ![car-tunnel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/car-tunnel.svg)
 */
const CarTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.5 16 16 123.5 16 256l0 248c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 256C0 114.6 114.6 0 256 0S512 114.6 512 256l0 248c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-248C496 123.5 388.5 16 256 16zM161 258.4L146.2 320l219.7 0L351 258.4c-2.6-10.8-12.2-18.4-23.3-18.4l-143.4 0c-11.1 0-20.7 7.6-23.3 18.4zm-31.9 64l16.3-67.7c4.3-18 20.4-30.6 38.9-30.6l143.4 0c18.5 0 34.6 12.7 38.9 30.6l16.3 67.7c19.2 6.3 33.1 24.3 33.1 45.7l0 80 0 8 0 8 0 16c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-16-160 0 0 16c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-16 0-8 0-8 0-80c0-21.3 13.9-39.4 33.1-45.7zM336 448l16 0 48 0 0-80c0-17.7-14.3-32-32-32l-224 0c-17.7 0-32 14.3-32 32l0 80 48 0 16 0 160 0zm16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16-48 0zm-240 0l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16-48 0zm64-88a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm32 16a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm112 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default CarTunnel;