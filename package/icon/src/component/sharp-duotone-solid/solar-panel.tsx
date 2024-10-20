
import { Icon, generic } from "../../index";

/**
 * A component that renders the `solar-panel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/solar-panel?s=sharp-duotone-solid solar-panel}
 * @preview ![solar-panel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/solar-panel.svg)
 */
const SolarPanel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 324.6L0 328l0 24 0 32 32 0 256 0 64 0 256 0 32 0 0-32 0-24 0-3.4-.7-3.3-64-296L569.8 0 544 0 96 0 70.2 0 64.7 25.2l-64 296L0 324.6zM66.5 320L89 216c3.5-16 6.9-32 10.4-48c7.5-34.7 15-69.3 22.5-104l90.9 0 48.2 0 118.2 0 48.2 0 90.9 0 22.5 104c3.5 16 6.9 32 10.4 48c7.5 34.7 15 69.3 22.5 104l-120.6 0-48.2 0-169.4 0-48.2 0L66.5 320z" />
        <path d="M121.8 64L99.3 168l102.9 0L212.7 64l-90.9 0zM66.5 320l120.6 0 10.4-104L89 216 66.5 320zm168.9 0l169.4 0L394.3 216l-148.6 0L235.3 320zm217.6 0l120.6 0L551 216l-108.5 0 10.4 104zM437.7 168l102.9 0L518.2 64l-90.9 0 10.4 104zm-187.2 0l139 0L379.1 64 260.9 64 250.5 168zM416 448l-64 0 0-64-64 0 0 64-64 0-32 0 0 64 32 0 192 0 32 0 0-64-32 0z" />
    </Icon>
);

export default SolarPanel;