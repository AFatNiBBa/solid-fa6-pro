
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ribbon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ribbon?s=duotone ribbon}
 * @preview ![ribbon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ribbon.svg)
 */
const Ribbon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M18.7 440c0 11 5.6 21.8 16.1 27.8l55.1 31.5c5 2.8 10.4 4.2 15.9 4.2c8.7 0 17.3-3.6 23.6-10.3l97.7-106.3c-27.8-31.9-55.6-63.7-83.3-95.6L27.1 418.5c-5.7 6.2-8.4 13.9-8.4 21.6zM96 64c16.7 18.2 33.4 36.4 50 54.6c7.8-5.1 37-22.6 78-22.6s70.2 17.4 78 22.6L352 64 328 32C312.9 11.9 289.2 0 264 0L184 0c-25.2 0-48.9 11.9-64 32L96 64z" />
        <path d="M96 64L420.9 418.5c13.9 15.1 10.1 39.2-7.7 49.4L358.8 499c-13.2 7.6-30 4.7-40-6.8L87.6 227.1C72.4 209.6 64 187.2 64 164l0-23c0-19 5.6-37.5 16.1-53.3L96 64zM328.4 270.2L245.7 180 352 64l19.4 33.9c8.3 14.5 12.6 30.9 12.6 47.6l0 25.8c0 23.6-8.7 46.4-24.5 64l-31.2 34.8z" />
    </Icon>
);

export default Ribbon;