
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-arrow-down?s=sharp-duotone-solid cloud-arrow-down}
 * @preview ![cloud-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-arrow-down.svg)
 */
const CloudArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336L0 480l144 0 368 0 128 0 0-128c0-59.6-40.8-109.8-96-124l0-36c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192l0 8.2C40.1 220 0 273.3 0 336zm206.1-40L240 262.1l17 17 39 39L296 184l0-24 48 0 0 24 0 134.1 39-39 17-17L433.9 296l-17 17-80 80-17 17-17-17-80-80-17-17z" />
        <path d="M206.1 296l17 17 80 80 17 17 17-17 80-80 17-17L400 262.1l-17 17-39 39L344 184l0-24-48 0 0 24 0 134.1-39-39-17-17L206.1 296z" />
    </Icon>
);

export default CloudArrowDown;