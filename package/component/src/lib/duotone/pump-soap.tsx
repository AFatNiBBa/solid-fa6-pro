
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pump-soap` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pump-soap?s=duotone pump-soap}
 * @preview ![pump-soap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pump-soap.svg)
 */
const PumpSoap: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M35 442.7C31.9 480 61.3 512 98.8 512l186.4 0c35.6 0 64-29 64-63.9c0-1.8-.1-3.6-.2-5.4l-18.7-224c-2.8-33.2-30.5-58.7-63.8-58.7L256 160l-128 0-10.6 0c-33.3 0-61 25.5-63.8 58.7L35 442.7zM128 360c0-32.5 37-80.9 50.9-97.9c3.2-3.9 8.1-6.1 13.1-6.1s9.9 2.2 13.1 6.1C219 279.1 256 327.5 256 360c0 35.3-28.7 56-64 56s-64-20.7-64-56z" />
        <path d="M128 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l60.1 0c21.2 0 41.6 8.4 56.6 23.4l33.9 33.9c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-33.9-33.9c-3-3-7.1-4.7-11.3-4.7L256 96l0 64-128 0 0-128zM256 360c0 35.3-28.7 56-64 56s-64-20.7-64-56c0-32.5 37-80.9 50.9-97.9c3.2-3.9 8.1-6.1 13.1-6.1s9.9 2.2 13.1 6.1C219 279.1 256 327.5 256 360z" />
    </Icon>
);

export default PumpSoap;