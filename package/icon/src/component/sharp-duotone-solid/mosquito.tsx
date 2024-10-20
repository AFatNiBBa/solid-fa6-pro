
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mosquito` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mosquito?s=sharp-duotone-solid mosquito}
 * @preview ![mosquito](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mosquito.svg)
 */
const Mosquito: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 320.6c0 84.6 97.6 127 154.6 67.1C199.1 347.2 243.5 306.6 288 266l32-29.2c10.7 9.7 21.3 19.5 32 29.4c44.4 40.4 88.9 81 133.4 121.6C542.4 447.6 640 405.2 640 320.6c0-47.9-34-88.3-79.4-94.2c-51-8-102-16-153-23.9c-22.1-3.5-44.2-6.9-66.3-10.4c-14.2 0-28.4 0-42.7 0c-22.1 3.5-44.2 6.9-66.3 10.4c-51 8-102 16-153 23.9C34 232.3 0 272.7 0 320.6z" />
        <path d="M288 266l0 .2-67 87-5 6.5 0 8.2 0 53.5-40.4 37.9-17.5 16.4 32.9 35 17.5-16.4 48-45.1 7.6-7.1 0-10.4 0-55.7 24-31.2 0 62.9 0 32 64 0 0-32 0-62.9L376 376l0 55.7 0 10.4 7.6 7.1 48 45.1 17.5 16.4 32.9-35-17.5-16.4L424 421.4l0-53.5 0-8.2-5-6.5-67-87 0-.2-32-29.2L288 266zm119.7-63.6L449 161.1l13-13-9.1-15.9L429.5 91.4l36.3-40.1 16.1-17.8L446.3 1.3 430.2 19.1l-48 53L370.5 85l8.6 15.1 22.9 40L352 190.3l0-38.2 0-32-24 0 0-48.2 0-8-16 0 0 8 0 48.2-24 0 0 32 0 38.1-50.1-50.1 22.9-40L269.5 85 257.8 72.1l-48-53L193.7 1.3 158.1 33.5l16.1 17.8 36.3 40.1-23.3 40.8-9.1 15.9 13 13 41.3 41.4 66.3-10.4 42.7 0 66.3 10.4z" />
    </Icon>
);

export default Mosquito;