
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilets-portable` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilets-portable?s=duotone toilets-portable}
 * @preview ![toilets-portable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/toilets-portable.svg)
 */
const ToiletsPortable: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 88 0 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8 160 0 0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400 0-24-24 0L24 64 0 64zM176 240c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64zM320 64l0 24 0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8 160 0 0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400 0-24-24 0-8 0L352 64l-8 0-24 0zM496 240c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64z" />
        <path d="M32 0C14.3 0 0 14.3 0 32L0 64l256 0 0-32c0-17.7-14.3-32-32-32L32 0zM352 0c-17.7 0-32 14.3-32 32l0 32 256 0 0-32c0-17.7-14.3-32-32-32L352 0zM192 224c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm336 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z" />
    </Icon>
);

export default ToiletsPortable;