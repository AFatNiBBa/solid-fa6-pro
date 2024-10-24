
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flux-capacitor` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flux-capacitor?s=duotone flux-capacitor}
 * @preview ![flux-capacitor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/flux-capacitor.svg)
 */
const FluxCapacitor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm48 64c0 44.2 35.8 80 80 80c16.3 0 31.5-4.9 44.1-13.3c12 12 23.9 23.9 35.9 35.9l0 11c-36.5 7.4-64 39.7-64 78.4c0 44.2 35.8 80 80 80s80-35.8 80-80c0-38.7-27.5-71-64-78.4l0-11 35.9-35.9c12.6 8.4 27.8 13.3 44.1 13.3c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80c0 16.3 4.9 31.5 13.3 44.1c-9.8 9.8-19.5 19.5-29.3 29.3c-9.8-9.8-19.5-19.5-29.3-29.3c8.4-12.6 13.3-27.8 13.3-44.1c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
        <path d="M171.3 180.7c3-6.3 4.7-13.3 4.7-20.7c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48c7.4 0 14.4-1.7 20.7-4.7L208 262.6l0 44.1c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-44.1 59.3-59.3c6.3 3 13.3 4.7 20.7 4.7c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48c0 7.4 1.7 14.4 4.7 20.7L224 233.4l-52.7-52.7z" />
    </Icon>
);

export default FluxCapacitor;