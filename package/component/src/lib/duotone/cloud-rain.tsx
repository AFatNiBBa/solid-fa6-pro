
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-rain` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-rain?s=duotone cloud-rain}
 * @preview ![cloud-rain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-rain.svg)
 */
const CloudRain: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 461l0 3c0 26.5 21.5 48 48 48s48-21.5 48-48l0-3c0-8.5-2.1-16.9-6.2-24.3L102.8 372c-1.3-2.5-3.9-4-6.8-4s-5.4 1.5-6.8 4L54.2 436.6C50.1 444.1 48 452.5 48 461zm160 0l0 3c0 26.5 21.5 48 48 48s48-21.5 48-48l0-3c0-8.5-2.1-16.9-6.2-24.3L262.8 372c-1.3-2.5-3.9-4-6.8-4s-5.4 1.5-6.8 4l-35.1 64.6c-4.1 7.5-6.2 15.8-6.2 24.3zm160 0l0 3c0 26.5 21.5 48 48 48s48-21.5 48-48l0-3c0-8.5-2.1-16.9-6.2-24.3L422.8 372c-1.3-2.5-3.9-4-6.8-4s-5.4 1.5-6.8 4l-35.1 64.6c-4.1 7.5-6.2 15.8-6.2 24.3z" />
        <path d="M0 224c0 53 43 96 96 96l320 0c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224z" />
    </Icon>
);

export default CloudRain;