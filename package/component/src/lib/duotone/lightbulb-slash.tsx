
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lightbulb-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-slash?s=duotone lightbulb-slash}
 * @preview ![lightbulb-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lightbulb-slash.svg)
 */
const LightbulbSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M152.4 229.8c5.4 16.8 13.2 32.4 23 46.6c5 7.2 10.2 14.3 15.4 21.4c19.8 27.1 39.7 54.4 49.2 86.2l108.1 0L152.4 229.8zm8.5-129c17.5 13.7 35 27.4 52.4 41.1C227.7 96.7 270 64 320 64c8.8 0 16 7.2 16 16s-7.2 16-16 16c-40 0-73.1 29.3-79 67.6c65 50.9 129.9 101.8 194.9 152.8c4.4-6.2 8.9-12.4 13.4-18.6c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C496 78.8 417.2 0 320 0C249.7 0 189.1 41.2 160.8 100.8zM240 416l0 16c0 44.2 35.8 80 80 80s80-35.8 80-80l0-7.1L388.7 416 240 416z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default LightbulbSlash;