
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-xmark?s=sharp-duotone-solid cloud-xmark}
 * @preview ![cloud-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-xmark.svg)
 */
const CloudXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336L0 480l144 0 368 0 128 0 0-128c0-59.6-40.8-109.8-96-124l0-36c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192l0 8.2C40.1 220 0 273.3 0 336zM222.1 224L256 190.1l17 17 47 47 47-47 17-17L417.9 224l-17 17-47 47 47 47 17 17L384 385.9l-17-17-47-47-47 47-17 17L222.1 352l17-17 47-47-47-47-17-17z" />
        <path d="M401 241l17-17L384 190.1l-17 17-47 47-47-47-17-17L222.1 224l17 17 47 47-47 47-17 17L256 385.9l17-17 47-47 47 47 17 17L417.9 352l-17-17-47-47 47-47z" />
    </Icon>
);

export default CloudXmark;