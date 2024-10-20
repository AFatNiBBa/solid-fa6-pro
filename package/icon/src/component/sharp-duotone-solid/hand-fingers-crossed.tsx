
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-fingers-crossed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-fingers-crossed?s=sharp-duotone-solid hand-fingers-crossed}
 * @preview ![hand-fingers-crossed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-fingers-crossed.svg)
 */
const HandFingersCrossed: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 272l0 91c0 33.9 13.5 66.5 37.5 90.5l11.6 11.6c30 30 70.7 46.9 113.1 46.9l61.7 0c88.4 0 160-71.6 160-160l-96 0 0-32-64 0 0 48 0 16-16 0L96 384l-16 0 0-32 16 0 96 0 0-32 0-48-41.4 0-35.3 0L80 272 0 272zM29.5 33.6L43 62.6l32 68.7 35.3-75.7L101 35.6 87.5 6.6l-58 27.1zM59.6 240l70.6 0L212.8 63l13.5-29-58-27.1-13.5 29L59.6 240zm105.9 0l26.4 0 0-9.4L181 207l-15.4 33z" />
        <path d="M288 160l-64 0 0 128 64 0 0-128zm96 32l-64 0 0 128 64 0 0-128z" />
    </Icon>
);

export default HandFingersCrossed;