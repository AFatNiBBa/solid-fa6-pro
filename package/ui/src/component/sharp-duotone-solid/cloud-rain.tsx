
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-rain` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-rain?s=sharp-duotone-solid cloud-rain}
 * @preview ![cloud-rain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-rain.svg)
 */
const CloudRain: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 461.9l0 2.1c0 26.5 21.5 48 48 48s48-21.5 48-48l0-2.1c0-9.1-2.5-18-7.1-25.8L96 368 55.1 436.1c-4.7 7.8-7.1 16.7-7.1 25.8zm160 0l0 2.1c0 26.5 21.5 48 48 48s48-21.5 48-48l0-2.1c0-9.1-2.5-18-7.1-25.8L256 368l-40.9 68.1c-4.7 7.8-7.1 16.7-7.1 25.8zm160 0l0 2.1c0 26.5 21.5 48 48 48s48-21.5 48-48l0-2.1c0-9.1-2.5-18-7.1-25.8L416 368l-40.9 68.1c-4.7 7.8-7.1 16.7-7.1 25.8z" />
        <path d="M0 320l96 0 320 0 96 0 0-96c0-53-43-96-96-96l0-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112l0 21.5C26.7 146.6 0 182.2 0 224l0 96z" />
    </Icon>
);

export default CloudRain;