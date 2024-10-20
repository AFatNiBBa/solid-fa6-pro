
import { Icon, generic } from "../../index";

/**
 * A component that renders the `boot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot?s=duotone boot}
 * @preview ![boot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/boot.svg)
 */
const Boot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l320 0 0 64-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 32-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 119.3 29.8C482 296.5 512 334.9 512 379l0 69L0 448 0 96z" />
        <path d="M32 0C14.3 0 0 14.3 0 32L0 96l320 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L32 0zM0 448l0 9.4c0 14.5 5.8 28.4 16 38.6s24.1 16 38.6 16l14.9 0c17 0 33.3-6.7 45.3-18.7l7.6-7.6c3.1-3.1 8.2-3.1 11.3 0l7.6 7.6c12 12 28.3 18.7 45.3 18.7l11 0c17 0 33.3-6.7 45.3-18.7l7.6-7.6c3.1-3.1 8.2-3.1 11.3 0l7.6 7.6c12 12 28.3 18.7 45.3 18.7l11 0c17 0 33.3-6.7 45.3-18.7l7.6-7.6c3.1-3.1 8.2-3.1 11.3 0l7.6 7.6c12 12 28.3 18.7 45.3 18.7l14.9 0c14.5 0 28.4-5.8 38.6-16s16-24.1 16-38.6l0-9.4L0 448z" />
    </Icon>
);

export default Boot;