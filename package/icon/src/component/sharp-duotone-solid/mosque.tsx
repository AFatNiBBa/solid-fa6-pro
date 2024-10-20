
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mosque` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mosque?s=sharp-duotone-solid mosque}
 * @preview ![mosque](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mosque.svg)
 */
const Mosque: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128C0 32 80 0 80 0s80 32 80 128l0 32 0 96-32 0 0 256L0 512 0 160l0-32zm192 96c0-74 53.5-105.2 107.9-137C339.6 63.9 379.8 40.5 400 0c20.2 40.5 60.4 63.9 100.1 87C554.5 118.8 608 150 608 224c0 27-11.4 48.4-24.6 64l-366.7 0c-13.2-15.6-24.6-37-24.6-64z" />
        <path d="M0 160l160 0 0 96-32 0 0 256L0 512 0 160zM352 512l-64 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-80 0 0-224 480 0 0 224-80 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-58c0-19-8.4-37-23-49.2L400 384l-25 20.8C360.4 417 352 435 352 454l0 58z" />
    </Icon>
);

export default Mosque;