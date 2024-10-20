
import { Icon, generic } from "../../index";

/**
 * A component that renders the `waveform` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/waveform?s=sharp-duotone-solid waveform}
 * @preview ![waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/waveform.svg)
 */
const Waveform: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M429 64l38.5 0 4.3 28.4L500.2 282l20.4-95 5.8-27 30.4 0 9.5 22.8L600 264l8 0 24 0 0 48-24 0-24 0-16 0-6.2-14.8-10.5-25.1L519.5 421l-5.8 27-37.2 0-4.3-28.4L446.8 249.5 407.7 483.9 403 512l-38.7 0-4.1-28.6L320 201.7 279.8 483.4 275.7 512 237 512l-4.7-28.1L193.2 249.5 167.7 419.6 163.5 448l-37.2 0-5.8-27L88.6 272.1 78.2 297.2 72 312l-16 0-24 0L8 312l0-48 24 0 8 0 33.8-81.2L83.3 160l30.4 0 5.8 27 20.4 95L168.3 92.4 172.5 64 211 64l4.7 28.1 38.5 231L296.2 28.6 300.3 0l39.3 0 4.1 28.6 42.1 294.5 38.5-231L429 64z" />
    </Icon>
);

export default Waveform;