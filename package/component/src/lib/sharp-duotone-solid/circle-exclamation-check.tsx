
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-exclamation-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation-check?s=sharp-duotone-solid circle-exclamation-check}
 * @preview ![circle-exclamation-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-exclamation-check.svg)
 */
const CircleExclamationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c86.4 0 162.8-42.8 209.1-108.3l-38.4-38.4-64-64L317.5 256 408 165.5l45.3 45.3L472 229.5l33-33C478.2 83.8 376.9 0 256 0C114.6 0 0 114.6 0 256zM232 128l48 0 0 24 0 112 0 24-48 0 0-24 0-112 0-24zm0 192l48 0 0 48-48 0 0-48z" />
        <path d="M280 128l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM232 320l0 48 48 0 0-48-48 0zM617 209l17-17L600 158.1l-17 17-111 111-47-47-17-17L374.1 256l17 17 64 64 17 17 17-17L617 209z" />
    </Icon>
);

export default CircleExclamationCheck;