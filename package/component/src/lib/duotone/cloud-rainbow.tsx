
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-rainbow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-rainbow?s=duotone cloud-rainbow}
 * @preview ![cloud-rainbow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-rainbow.svg)
 */
const CloudRainbow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M263.6 189.7c6.5 5 12.5 10.4 18 16.4c16.1-9 34.7-14.1 54.4-14.1c.2 0 .3 0 .5 0C385.4 119 466.8 69.5 560 64.4c8.8-.5 16-7.6 16-16.4l0-32c0-8.8-7.2-16-16-15.6C430.9 6.1 319.9 81.4 263.6 189.7zm108.1 8.1c20.9 7 39 20 52.3 36.9c32.1-41.5 80.7-69.5 136-74c8.8-.7 16-7.8 16-16.7l0-32c0-8.8-7.2-16.1-16-15.5c-76.9 4.7-144.6 43.4-188.4 101.3zm69.6 67.9c3 8.3 5.1 17.1 6.1 26.2c15.2 3.8 29.3 10.4 41.8 19.1c13.2-27.9 39.5-48.4 70.9-53.7c8.7-1.5 15.9-8.5 15.9-17.3l0-32c0-8.8-7.2-16.1-16-15.2c-49.9 4.9-93 32.8-118.8 72.9z" />
        <path d="M0 416c0 53 43 96 96 96l320 0c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28c-18.7-35.7-56.1-60-99.2-60c-61.9 0-112 50.1-112 112c0 7.1 .7 14.1 1.9 20.8C27.6 337.4 0 373.5 0 416z" />
    </Icon>
);

export default CloudRainbow;