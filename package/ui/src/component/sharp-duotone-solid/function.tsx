
import { Icon, generic } from "../../index";

/**
 * A component that renders the `function` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/function?s=sharp-duotone-solid function}
 * @preview ![function](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/function.svg)
 */
const Function: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M224 320c0 65.6 19.6 126.7 53.3 177.7l53.4-35.3C303.7 421.6 288 372.7 288 320s15.7-101.6 42.7-142.3l-53.4-35.3C243.6 193.3 224 254.4 224 320zM533.3 177.7c27 40.7 42.7 89.6 42.7 142.3s-15.7 101.6-42.7 142.3l53.4 35.3C620.4 446.7 640 385.6 640 320s-19.6-126.7-53.3-177.7l-53.4 35.3z" />
        <path d="M96 0L64 0l0 32 0 160-32 0L0 192l0 64 32 0 32 0 0 160L0 416l0 64 96 0 32 0 0-32 0-192 32 0 32 0 0-64-32 0-32 0 0-128 64 0 32 0 0-64L192 0 96 0zM398.6 241.4L376 218.7 330.7 264l22.6 22.6L386.7 320l-33.4 33.4L330.7 376 376 421.3l22.6-22.6L432 365.3l33.4 33.4L488 421.3 533.3 376l-22.6-22.6L477.3 320l33.4-33.4L533.3 264 488 218.7l-22.6 22.6L432 274.7l-33.4-33.4z" />
    </Icon>
);

export default Function;