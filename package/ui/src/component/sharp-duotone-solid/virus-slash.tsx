
import { Icon, generic } from "../../index";

/**
 * A component that renders the `virus-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/virus-slash?s=sharp-duotone-solid virus-slash}
 * @preview ![virus-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/virus-slash.svg)
 */
const VirusSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 224l0 32 0 32 32 0 11.5 0c49.9 0 74.9 60.3 39.6 95.6l-8.2 8.2-22.6 22.6L139 437c7.5 7.5 15.1 15.1 22.6 22.6L184.2 437l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6l0 11.5 0 32 32 0 32 0 0-32 0-11.5c0-31.2 23.6-52.7 50-55.7L144.7 210c-9.5 8.5-22.2 14-37.2 14L96 224l-32 0zM133.3 80.7L264.2 182.3c7-4 15.2-6.3 23.8-6.3c26.5 0 48 21.5 48 48c0 4.4-.6 8.7-1.7 12.8L476.4 347.1c-1.4-29.7 21.2-59.1 56-59.1l11.5 0 32 0 0-32 0-32-32 0-11.5 0c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2 22.6-22.6L501 75 478.4 52.4 455.8 75l-8.2 8.2C412.3 118.4 352 93.4 352 43.5L352 32l0-32L320 0 288 0l0 32 0 11.5c0 49.9-60.3 74.9-95.6 39.6L184.2 75 161.6 52.4 139 75l-5.7 5.7z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L18.9 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default VirusSlash;