
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spa` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spa?s=sharp-duotone-solid spa}
 * @preview ![spa](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/spa.svg)
 */
const Spa: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M183.6 235.6C208.9 99.8 288 32 288 32s79.2 67.9 104.4 203.6c-21.9 13.5-41.9 29.9-59.4 48.6c-8.8 9.3-17 19.3-24.5 29.8c-3.8 5.2-7.3 10.6-10.8 16.1s-6.7 11.1-9.7 16.9c-24.4-45.9-60.7-84.2-104.4-111.3z" />
        <path d="M30 192L0 192C0 351.1 128.9 480 288 480s288-128.9 288-288l-30 0c-110.8 0-208.5 62-258 154.9C238.5 254 140.8 192 30 192z" />
    </Icon>
);

export default Spa;