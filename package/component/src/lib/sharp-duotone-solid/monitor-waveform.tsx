
import { Icon, generic } from "../../index";

/**
 * A component that renders the `monitor-waveform` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monitor-waveform?s=sharp-duotone-solid monitor-waveform}
 * @preview ![monitor-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/monitor-waveform.svg)
 */
const MonitorWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 96l0 160 128 0 9.9 0 4.4 8.8L224 300.2l49.7-99.4L288 172.2l14.3 28.6L329.9 256l70.1 0 16 0 0 32-16 0-80 0-9.9 0-4.4-8.8L288 243.8l-49.7 99.4L224 371.8l-14.3-28.6L182.1 288 64 288l0 128 448 0 0-320L64 96z" />
        <path d="M576 32L0 32 0 480l576 0 0-448zM512 96l0 320L64 416 64 96l448 0z" />
    </Icon>
);

export default MonitorWaveform;