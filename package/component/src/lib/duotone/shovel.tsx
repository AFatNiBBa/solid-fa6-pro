
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shovel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shovel?s=duotone shovel}
 * @preview ![shovel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shovel.svg)
 */
const Shovel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M201.4 265.4c15.1 15.1 30.2 30.2 45.3 45.3l97-97c13.3 6.6 28.4 10.3 44.3 10.3c26.5 0 51.9-10.5 70.6-29.3l44.1-44.1c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-96-96C400.4 3.1 392.2 0 384 0s-16.4 3.1-22.6 9.4L317.3 53.5C298.5 72.2 288 97.6 288 124.1c0 15.9 3.7 30.9 10.3 44.3l-97 97zM352 124.1c0-9.5 3.8-18.6 10.5-25.4L384 77.3 434.7 128l-21.5 21.5c-6.7 6.7-15.9 10.5-25.4 10.5c-19.8 0-35.9-16.1-35.9-35.9z" />
        <path d="M0 386.3V480c0 17.7 14.3 32 32 32h93.7c42.4 0 83.1-16.9 113.1-46.9l58.5-58.5c12.5-12.5 12.5-32.8 0-45.3L150.6 214.6c-12.5-12.5-32.8-12.5-45.3 0L46.9 273.1C16.9 303.1 0 343.8 0 386.3z" />
    </Icon>
);

export default Shovel;