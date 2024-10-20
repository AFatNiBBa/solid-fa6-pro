
import { Icon } from "../../index";

/**
 * A component that renders the `waveform` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/waveform?s=light waveform}
 * @preview ![waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/waveform.svg)
 */
const Waveform: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 0c8 0 14.8 5.9 15.9 13.9l49.3 369.5L432.2 77.6c1.2-7.9 8-13.6 16-13.6s14.6 6 15.7 13.8l34.6 254 29.8-158.8c1.4-7.3 7.6-12.7 15-13s14.1 4.5 16.1 11.6L588.1 272l35.9 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-7.1 0-13.4-4.7-15.4-11.6l-13.4-46.8L511.7 434.9c-1.4 7.7-8.3 13.2-16.1 13s-14.4-6.1-15.5-13.8L447 191.4l-47.2 307c-1.2 7.9-8 13.6-16 13.6s-14.6-6-15.7-13.9L320 137.1 271.9 498.1c-1.1 7.9-7.7 13.8-15.7 13.9s-14.8-5.7-16-13.6L193 191.4 159.9 434.2c-1.1 7.8-7.6 13.6-15.5 13.8s-14.7-5.3-16.1-13L92.8 245.6 79.4 292.4c-2 6.9-8.2 11.6-15.4 11.6l-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l35.9 0L80.6 171.6c2-7.1 8.7-11.9 16.1-11.6s13.6 5.7 15 13l29.8 158.8 34.6-254c1.1-7.9 7.8-13.8 15.7-13.8s14.7 5.7 16 13.6l47.1 305.9L304.1 13.9C305.2 5.9 312 0 320 0z" />
    </Icon>
);

export default Waveform;