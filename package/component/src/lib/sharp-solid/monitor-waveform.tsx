
import { Icon } from "../../index";

/**
 * A component that renders the `monitor-waveform` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monitor-waveform?s=sharp-solid monitor-waveform}
 * @preview ![monitor-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/monitor-waveform.svg)
 */
const MonitorWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 32L0 32 0 480l576 0 0-448zM80 96l416 0 16 0 0 16 0 288 0 16-16 0L80 416l-16 0 0-16 0-128 0-160 0-16 16 0zM96 256l96 0 8.6 0 4.8 7.1L223 289.6l51.2-89.5 14.8-26 13.4 26.7L329.9 256l70.1 0 16 0 0 32-16 0-80 0-9.9 0-4.4-8.8-18.6-37.3-49.2 86L225 350.4l-14.4-21.5L183.4 288 96 288l0 96 384 0 0-256L96 128l0 128z" />
    </Icon>
);

export default MonitorWaveform;