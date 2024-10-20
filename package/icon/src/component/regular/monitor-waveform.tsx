
import { Icon } from "../../index";

/**
 * A component that renders the `monitor-waveform` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monitor-waveform?s=regular monitor-waveform}
 * @preview ![monitor-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/monitor-waveform.svg)
 */
const MonitorWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 144 128 0c8.4 0 16.2 4.4 20.6 11.7l25.5 42.5 60.4-120.9c3.9-7.8 11.8-12.9 20.5-13.2s17 4.1 21.5 11.6l41 68.3 58.4 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-72 0c-8.4 0-16.2-4.4-20.6-11.7l-25.5-42.5L245.5 354.7c-3.9 7.8-11.8 12.9-20.5 13.2s-17-4.1-21.5-11.6l-41-68.3L48 288l0 128c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default MonitorWaveform;