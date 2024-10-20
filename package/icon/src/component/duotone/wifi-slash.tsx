
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wifi-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-slash?s=duotone wifi-slash}
 * @preview ![wifi-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wifi-slash.svg)
 */
const WifiSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M8.9 202c-12.2-12.8-11.8-33 .9-45.2C20 147 30.7 137.7 41.7 128.9l51.9 40.9C79.7 179.9 66.6 191 54.2 202.9c-12.8 12.2-33 11.8-45.2-.9zM126.7 309.2c-11.7-13.3-10.4-33.5 2.8-45.2c13.4-11.9 28-22.5 43.5-31.7L228 275.7c-20.6 9.3-39.5 21.6-56.2 36.3c-13.3 11.7-33.5 10.4-45.2-2.8zm1.4-234.1C186.3 47.5 251.3 32 320 32c120.4 0 229.7 47.5 310.2 124.7c12.8 12.2 13.2 32.5 .9 45.2s-32.5 13.2-45.2 .9C516.8 136.7 423.2 96 320 96c-47.3 0-92.6 8.5-134.4 24.2c-19.2-15-38.3-30.1-57.5-45.1zM256 416c0-35.3 28.7-64 64-64c1.7 0 3.5 .1 5.2 .2L380.8 396c2.1 6.3 3.2 13 3.2 20c0 35.3-28.7 64-64 64s-64-28.7-64-64zm24.7-221.3c12.9-1.8 26-2.7 39.3-2.7c73 0 139.8 27.2 190.5 72c13.2 11.7 14.5 31.9 2.8 45.2s-31.9 14.5-45.2 2.8c-28.9-25.5-64.4-43.7-103.6-51.6c-28-21.9-55.9-43.8-83.9-65.8z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default WifiSlash;