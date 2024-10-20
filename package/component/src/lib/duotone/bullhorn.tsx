
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bullhorn` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullhorn?s=duotone bullhorn}
 * @preview ![bullhorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bullhorn.svg)
 */
const Bullhorn: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 128l0 32 0 32 0 96 0 32 0 32 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6 0-120.7L480 32c0-12.9-7.8-24.6-19.8-29.6C456.3 .8 452.1 0 448 0c-8.3 0-16.5 3.3-22.6 9.4L381.7 53c-48 48-113.1 75-181 75c-2.9 0-5.8 0-8.7 0z" />
        <path d="M0 192c0-35.3 28.7-64 64-64l128 0 0 192 0 32 0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128c-35.3 0-64-28.7-64-64l0-96zm512 48c0 27.9-13.4 51.6-32 60.4l0-120.7c18.6 8.8 32 32.5 32 60.4z" />
    </Icon>
);

export default Bullhorn;