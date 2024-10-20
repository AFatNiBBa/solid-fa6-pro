
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tooth` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tooth?s=sharp-duotone-solid tooth}
 * @preview ![tooth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tooth.svg)
 */
const Tooth: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M186.1 52.1C169.3 39.1 148.7 32 127.5 32C74.7 32 32 74.7 32 127.5l0 6.2c0 15.8 3.7 31.3 10.7 45.5L73 239.6l39.4 220.6 3.5 19.8 20.1 0 8 0 19.9 0 3.7-19.5L195.9 312l56.3 0 28.3 148.5 3.7 19.5 19.9 0 8 0 20.1 0 3.5-19.8L375 239.6l30.2-60.5c7.1-14.1 10.7-29.7 10.7-45.5l0-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 32.1 25-19.6 25.3-37-28.8-37-28.8z" />
    </Icon>
);

export default Tooth;