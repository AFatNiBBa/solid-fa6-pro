
import { Icon, generic } from "../../index";

/**
 * A component that renders the `industry-windows` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/industry-windows?s=duotone industry-windows}
 * @preview ![industry-windows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/industry-windows.svg)
 */
const IndustryWindows: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 64c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 146.1 0 5.3 0 50c64-36.6 128-73.1 192-109.7l0 54.4 0 5.3 0 50c64-36.6 128-73.1 192-109.7L544 304l0 128c0 26.5-21.5 48-48 48L80 480c-26.5 0-48-21.5-48-48l0-80 0-48L32 64zM248 328l0 48c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zm128 0l0 48c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16z" />
        <path d="M363.9 148.8c11.5-6.6 15.5-21.2 8.9-32.7s-21.2-15.5-32.7-8.9L160 210.1l0 55.3L363.9 148.8zm192 0c11.5-6.6 15.5-21.2 8.9-32.7s-21.2-15.5-32.7-8.9L352 210.1l0 55.3L555.9 148.8zM136 312c-8.8 0-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16l-48 0zm128 0c-8.8 0-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16l-48 0zm112 16l0 48c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default IndustryWindows;