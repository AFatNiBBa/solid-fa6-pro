
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-rainbow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-rainbow?s=sharp-duotone-solid cloud-rainbow}
 * @preview ![cloud-rainbow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-rainbow.svg)
 */
const CloudRainbow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M263.6 189.7c6.5 5 12.5 10.4 18 16.4c16.1-9 34.7-14.1 54.4-14.1l.5 0C388.2 114.8 476.2 64 576 64l0-64C440.1 0 322.3 77 263.6 189.7zm108.1 8.1c20.9 7 39 20 52.3 36.9c35.1-45.4 90.1-74.7 152-74.7l0-64c-83.5 0-157.6 40-204.4 101.8zm69.6 67.9c3 8.3 5.1 17.1 6.1 26.2c15.2 3.8 29.3 10.4 41.8 19.1c15.4-32.5 48.5-55 86.8-55l0-64c-56.6 0-106.3 29.4-134.7 73.7z" />
        <path d="M0 512l96 0 320 0 96 0 0-96c0-53-43-96-96-96l0-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28c-18.7-35.7-56.1-60-99.2-60c-61.9 0-112 50.1-112 112l0 21.5C26.7 338.6 0 374.2 0 416l0 96z" />
    </Icon>
);

export default CloudRainbow;