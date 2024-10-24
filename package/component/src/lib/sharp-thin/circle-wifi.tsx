
import { Icon } from "../../index";

/**
 * A component that renders the `circle-wifi` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-wifi?s=sharp-thin circle-wifi}
 * @preview ![circle-wifi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-wifi.svg)
 */
const CircleWifi: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm410.9-26.9C372.8 186.7 317.5 160 256 160s-116.8 26.7-154.9 69.1L89.8 217.8C130.8 172.5 190.1 144 256 144s125.2 28.5 166.2 73.8l-11.3 11.3zM352 288l-11.4 11.4C321.7 273.1 290.8 256 256 256s-65.7 17.1-84.6 43.4L160 288c21.9-29.1 56.7-48 96-48s74.1 18.9 96 48zm-96 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default CircleWifi;