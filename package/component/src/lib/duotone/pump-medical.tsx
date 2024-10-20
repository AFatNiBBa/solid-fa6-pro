
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pump-medical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pump-medical?s=duotone pump-medical}
 * @preview ![pump-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pump-medical.svg)
 */
const PumpMedical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M35 442.7C31.9 480 61.3 512 98.8 512l186.4 0c35.6 0 64-29 64-63.9c0-1.8-.1-3.6-.2-5.4l-18.7-224c-2.8-33.2-30.5-58.7-63.8-58.7L256 160l-128 0-10.6 0c-33.3 0-61 25.5-63.8 58.7L35 442.7zM112 336c0-13.3 10.7-24 24-24l32 0 0-32c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24z" />
        <path d="M128 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l60.1 0c21.2 0 41.6 8.4 56.6 23.4l33.9 33.9c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-33.9-33.9c-3-3-7.1-4.7-11.3-4.7L256 96l0 64-128 0 0-128zm64 224c13.3 0 24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default PumpMedical;