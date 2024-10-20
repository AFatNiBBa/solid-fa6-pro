
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lightbulb-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-slash?s=sharp-duotone-solid lightbulb-slash}
 * @preview ![lightbulb-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lightbulb-slash.svg)
 */
const LightbulbSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M152.4 229.8c5.4 16.8 13.2 32.4 23 46.6c5 7.2 10.2 14.3 15.4 21.4c19.8 27.1 39.7 54.4 49.2 86.2l108.1 0L152.4 229.8zm8-128l52.7 40.9C227.3 97.1 269.8 64 320 64l0 32c-40.2 0-73.4 29.6-79.1 68.2L436.2 315.9c4.3-6.1 8.7-12.1 13.1-18.1c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C496 78.8 417.2 0 320 0C249.3 0 188.4 41.7 160.4 101.7zM240 416l0 96 160 0 0-87.1L388.7 416 240 416z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default LightbulbSlash;