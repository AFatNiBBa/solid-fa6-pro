
import { Icon, generic } from "../../index";

/**
 * A component that renders the `futbol` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/futbol?s=sharp-duotone-solid futbol}
 * @preview ![futbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/futbol.svg)
 */
const Futbol: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1 278.9c3.5 39.4 15.9 76.3 35.2 108.5c39.2-2.6 78.4-5.2 117.6-7.8c5.4 3.9 10.8 7.8 16.2 11.8c9.6 38.1 19.3 76.2 28.9 114.3c18.3 4.2 37.4 6.4 57 6.4s38.7-2.2 57-6.4c9.6-38.1 19.3-76.2 28.9-114.3l16.2-11.8c39.2 2.6 78.4 5.2 117.6 7.8c19.3-32.2 31.8-69.1 35.2-108.5l-99.7-62.8c-2.1-6.3-4.1-12.7-6.2-19c14.6-36.5 29.2-72.9 43.8-109.4c-25.1-28.8-56.6-51.9-92.3-67.1C326.4 45.7 296.2 70.8 266 96l-20 0c-30.2-25.2-60.4-50.3-90.6-75.5C119.8 35.8 88.3 58.9 63.1 87.6c14.6 36.5 29.2 72.9 43.8 109.4c-2.1 6.3-4.1 12.7-6.2 19C67.5 237 34.2 257.9 1 278.9zm159.9-53.8L256 156l95.1 69.1L314.8 336.9l-117.6 0c-12.1-37.3-24.2-74.5-36.3-111.8z" />
        <path d="M1 278.9c-.7-7.5-1-15.2-1-22.9C0 191.5 23.8 132.6 63.1 87.6L106.9 197l-6.2 19L1 278.9zM199 505.6C130 489.9 71.6 446.4 36.2 387.4l117.6-7.8L170 391.3 199 505.6zM475.8 387.4C440.4 446.4 382 489.9 313 505.6L342 391.3l16.2-11.8 117.6 7.8zM448.9 87.6C488.2 132.6 512 191.5 512 256c0 7.7-.3 15.3-1 22.9l-99.7-62.8-6.2-19L448.9 87.6zM356.6 20.5L266 96l-20 0L155.4 20.5C186.3 7.3 220.3 0 256 0s69.7 7.3 100.6 20.5zM256 156l95.1 69.1L314.8 336.9l-117.6 0L160.9 225.1 256 156z" />
    </Icon>
);

export default Futbol;