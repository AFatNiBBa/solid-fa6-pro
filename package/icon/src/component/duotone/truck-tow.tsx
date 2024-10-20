
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-tow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-tow?s=duotone truck-tow}
 * @preview ![truck-tow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-tow.svg)
 */
const TruckTow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160l0 16c0 26.5 21.5 48 48 48s48-21.5 48-48L96 64l96 192 192 0L169.6 10.9C163.5 4 154.7 0 145.5 0L96 0C78.3 0 64 14.3 64 32l0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16zM96 432a80 80 0 1 0 160 0A80 80 0 1 0 96 432zm320 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M416 96c-17.7 0-32 14.3-32 32l0 128L48 256c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l17.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l97.1 0 1.1 0c7.8-54.3 54.4-96 110.9-96c56.2 0 102.8 41.4 110.8 95.4c18.9-3.2 33.2-19.6 33.2-39.4l0-88 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L544 114.7c-12-12-28.3-18.7-45.3-18.7L416 96zM576 256l-128 0 0-96 50.7 0L576 237.3l0 18.7z" />
    </Icon>
);

export default TruckTow;