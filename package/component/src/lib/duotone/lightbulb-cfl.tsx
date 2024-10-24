
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lightbulb-cfl` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-cfl?s=duotone lightbulb-cfl}
 * @preview ![lightbulb-cfl](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lightbulb-cfl.svg)
 */
const LightbulbCfl: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 64c0 2.6 .3 5.2 1 7.8C5.2 88.9 22.6 99.3 39.8 95l128-32c17.1-4.3 27.6-21.7 23.3-38.8C187.4 9.7 174.4 0 160 0c-2.6 0-5.2 .3-7.8 1L24.2 33C9.7 36.6 0 49.6 0 64zm0 96c0 2.6 .3 5.2 1 7.8c4.3 17.1 21.7 27.6 38.8 23.3l256-64c17.1-4.3 27.6-21.7 23.3-38.8s-21.7-27.6-38.8-23.3l-256 64C9.7 132.6 0 145.6 0 160zm0 96c0 2.6 .3 5.2 1 7.8c4.3 17.1 21.7 27.6 38.8 23.3L96 273l3.9-1 195.8-49c17.1-4.3 27.6-21.7 23.3-38.8s-21.7-27.6-38.8-23.3l-256 64C9.7 228.6 0 241.6 0 256zm96 50l0 78 48 0 0-90L96 306zm80.2-2c-.2 1.1-.2 2.2-.2 3.3c0 .5 0 .9 0 1.4l0 75.3 48 0c0-15.7 0-31.3 0-47l7.8-1.9 64-16c17.1-4.3 27.6-21.7 23.3-38.8s-21.7-27.6-38.8-23.3l-64 16-16 4c-13.2 3.3-22.4 14.3-24 27z" />
        <path d="M96 384c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l32 0c0 17.7 14.3 32 32 32s32-14.3 32-32l32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L96 384z" />
    </Icon>
);

export default LightbulbCfl;