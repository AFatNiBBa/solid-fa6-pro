
import { Icon } from "../../index";

/**
 * A component that renders the `circle-wifi` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-wifi?s=thin circle-wifi}
 * @preview ![circle-wifi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-wifi.svg)
 */
const CircleWifi: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm116.8-42.6c-3.3 3-8.3 2.7-11.3-.6s-2.7-8.3 .6-11.3C145.8 165.8 198.4 144 256 144s110.2 21.8 149.9 57.5c3.3 3 3.5 8 .6 11.3s-8 3.5-11.3 .6C358.3 180.2 309.5 160 256 160s-102.3 20.2-139.2 53.4zM272 352a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-96c-26.8 0-51.3 10.2-69.7 26.8c-3.3 3-8.3 2.7-11.3-.6s-2.7-8.3 .6-11.3c21.3-19.2 49.5-31 80.5-31s59.2 11.7 80.5 31c3.3 3 3.5 8 .6 11.3s-8 3.5-11.3 .6C307.3 266.1 282.8 256 256 256z" />
    </Icon>
);

export default CircleWifi;