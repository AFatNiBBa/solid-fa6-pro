
import { Icon, generic } from "../../index";

/**
 * A component that renders the `monitor-waveform` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monitor-waveform?s=duotone monitor-waveform}
 * @preview ![monitor-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/monitor-waveform.svg)
 */
const MonitorWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 96l0 160 128 0c6.1 0 11.6 3.4 14.3 8.8L224 300.2l49.7-99.4c2.7-5.4 8.3-8.8 14.3-8.8s11.6 3.4 14.3 8.8L329.9 256l70.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0c-6.1 0-11.6-3.4-14.3-8.8L288 243.8l-49.7 99.4c-2.7 5.4-8.3 8.8-14.3 8.8s-11.6-3.4-14.3-8.8L182.1 288 64 288l0 128 448 0 0-320L64 96z" />
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM512 96l0 320L64 416 64 96l448 0z" />
    </Icon>
);

export default MonitorWaveform;