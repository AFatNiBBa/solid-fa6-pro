
import { Icon } from "../../index";

/**
 * A component that renders the `solar-panel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/solar-panel?s=sharp-solid solar-panel}
 * @preview ![solar-panel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/solar-panel.svg)
 */
const SolarPanel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 0L70.2 0 64.7 25.2l-64 296L0 324.6 0 328l0 24 0 32 32 0 256 0 0 64-64 0-32 0 0 64 32 0 192 0 32 0 0-64-32 0-64 0 0-64 256 0 32 0 0-32 0-24 0-3.4-.7-3.3-64-296L569.8 0 544 0 96 0zm3.3 168L121.8 64l90.9 0L202.3 168 99.3 168zM89 216l108.5 0L187.1 320 66.5 320 89 216zm156.8 0l148.6 0 10.4 104-169.4 0 10.4-104zm196.8 0L551 216l22.5 104-120.6 0L442.5 216zm98.1-48l-102.9 0L427.3 64l90.9 0 22.5 104zm-151.2 0l-139 0L260.9 64l118.2 0 10.4 104z" />
    </Icon>
);

export default SolarPanel;