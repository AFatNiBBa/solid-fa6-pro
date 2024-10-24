
import { Icon, generic } from "../../index";

/**
 * A component that renders the `torii-gate` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/torii-gate?s=duotone torii-gate}
 * @preview ![torii-gate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/torii-gate.svg)
 */
const ToriiGate: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 128l64 0 0 96-64 0 0-96zm0 160l64 0 0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192zM224 128l64 0 0 96-64 0 0-96zm160 0l64 0 0 96-64 0 0-96zm0 160l64 0 0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192z" />
        <path d="M0 13.4L0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-66.6C512 6 506 0 498.6 0c-1.7 0-3.4 .3-5 1l-49 19.6C425.7 28.1 405.5 32 385.2 32L126.8 32c-20.4 0-40.5-3.9-59.4-11.4L18.4 1c-1.6-.6-3.3-1-5-1C6 0 0 6 0 13.4zM32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 224z" />
    </Icon>
);

export default ToriiGate;