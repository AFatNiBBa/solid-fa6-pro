
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fort` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fort?s=duotone fort}
 * @preview ![fort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fort.svg)
 */
const Fort: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 16L0 96l0 16 0 64c0 20.9 13.4 38.7 32 45.3c5 1.8 10.4 2.7 16 2.7l160 0c26.5 0 48-21.5 48-48l0-16 0-48 0-16 0-80c0-8.8-7.2-16-16-16L208 0c-8.8 0-16 7.2-16 16l0 48-32 0 0-48c0-8.8-7.2-16-16-16L112 0c-8.8 0-16 7.2-16 16l0 48L64 64l0-48C64 7.2 56.8 0 48 0L16 0C7.2 0 0 7.2 0 16zm384 0l0 80 0 16 0 48 0 16c0 26.5 21.5 48 48 48l160 0c5.6 0 11-1 16-2.7c18.6-6.6 32-24.4 32-45.3l0-64 0-16 0-80c0-8.8-7.2-16-16-16L592 0c-8.8 0-16 7.2-16 16l0 48-32 0 0-48c0-8.8-7.2-16-16-16L496 0c-8.8 0-16 7.2-16 16l0 48-32 0 0-48c0-8.8-7.2-16-16-16L400 0c-8.8 0-16 7.2-16 16z" />
        <path d="M384 160l-128 0 0 16c0 26.5-21.5 48-48 48L48 224c-5.6 0-11-1-16-2.7L32 464c0 26.5 21.5 48 48 48l176 0 0-128c0-35.3 28.7-64 64-64s64 28.7 64 64l0 128 176 0c26.5 0 48-21.5 48-48l0-242.7c-5 1.8-10.4 2.7-16 2.7l-160 0c-26.5 0-48-21.5-48-48l0-16z" />
    </Icon>
);

export default Fort;