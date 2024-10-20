
import { Icon } from "../../index";

/**
 * A component that renders the `circle-wifi` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-wifi?s=regular circle-wifi}
 * @preview ![circle-wifi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-wifi.svg)
 */
const CircleWifi: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm127.5-14.7c-9.8 8.9-25 8.1-33.9-1.8s-8.1-25 1.8-33.9C137.9 167.3 194.3 144 256 144s118.1 23.3 160.6 61.6c9.8 8.9 10.6 24 1.8 33.9s-24 10.6-33.9 1.8c-34-30.7-79-49.3-128.5-49.3s-94.4 18.6-128.5 49.3zM256 336a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0-48c-22.7 0-43.4 8.6-59 22.7c-9.8 8.9-25 8.1-33.9-1.7s-8.1-25 1.7-33.9C188.9 253.3 220.9 240 256 240s67.1 13.3 91.2 35.1c9.8 8.9 10.6 24.1 1.7 33.9s-24.1 10.6-33.9 1.7c-15.6-14.1-36.3-22.7-59-22.7z" />
    </Icon>
);

export default CircleWifi;