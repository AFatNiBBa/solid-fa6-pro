
import { Icon, generic } from "../../index";

/**
 * A component that renders the `solar-panel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/solar-panel?s=duotone solar-panel}
 * @preview ![solar-panel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/solar-panel.svg)
 */
const SolarPanel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M7 320.1C7 354.6 35 384 71 384l217 0 64 0 217 0c36 0 64-29.4 64-63.9c0-4.2-.4-8.4-1.3-12.7l-51.2-256C574.5 21.5 548.3 0 517.8 0L122.2 0C91.7 0 65.5 21.5 59.5 51.4L8.3 307.4C7.4 311.7 7 316 7 320.1zm64-.1c6.9-34.7 13.9-69.3 20.8-104c3.2-16 6.4-32 9.6-48L122.2 64l90.4 0 48.2 0 118.2 0 48.2 0 90.4 0c6.9 34.7 13.9 69.3 20.8 104c3.2 16 6.4 32 9.6 48c6.9 34.7 13.9 69.3 20.8 104l-116 0-48.2 0-169.4 0-48.2 0L71 320z" />
        <path d="M379.1 64L260.9 64 250.5 168l139 0L379.1 64zM212.7 64l-90.4 0L101.4 168l100.8 0L212.7 64zM197.5 216L91.8 216 71 320l116 0 10.4-104zm196.8 0l-148.6 0L235.3 320l169.4 0L394.3 216zm58.6 104l116 0L548.2 216l-105.6 0 10.4 104zM517.8 64l-90.4 0 10.4 104 100.8 0L517.8 64zM416 448l-64 0 0-64-64 0 0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
    </Icon>
);

export default SolarPanel;