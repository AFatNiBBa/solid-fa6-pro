
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-slash?s=duotone cloud-slash}
 * @preview ![cloud-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-slash.svg)
 */
const CloudSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336c0 79.5 64.5 144 144 144l343.4 0L97.2 172.6c-.8 6.4-1.2 12.9-1.2 19.4c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336zM138.6 83.3L600 445c24.6-23.3 40-56.3 40-93c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-46.4 0-88.2 19.8-117.4 51.3z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default CloudSlash;