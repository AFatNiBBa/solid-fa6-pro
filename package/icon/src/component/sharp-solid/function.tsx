
import { Icon } from "../../index";

/**
 * A component that renders the `function` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/function?s=sharp-solid function}
 * @preview ![function](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/function.svg)
 */
const Function: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 0L96 0l96 0 32 0 0 64-32 0-64 0 0 128 32 0 32 0 0 64-32 0-32 0 0 192 0 32-32 0L0 480l0-64 64 0 0-160-32 0L0 256l0-64 32 0 32 0L64 32 64 0zM288 320c0 52.7 15.7 101.6 42.7 142.3l-53.4 35.3C243.6 446.7 224 385.6 224 320s19.6-126.7 53.3-177.7l53.4 35.3C303.7 218.4 288 267.3 288 320zm288 0c0-52.7-15.7-101.6-42.7-142.3l53.4-35.3C620.4 193.3 640 254.4 640 320s-19.6 126.7-53.3 177.7l-53.4-35.3c27-40.7 42.7-89.6 42.7-142.3zM398.6 241.4L432 274.7l33.4-33.4L488 218.7 533.3 264l-22.6 22.6L477.3 320l33.4 33.4L533.3 376 488 421.3l-22.6-22.6L432 365.3l-33.4 33.4L376 421.3 330.7 376l22.6-22.6L386.7 320l-33.4-33.4L330.7 264 376 218.7l22.6 22.6z" />
    </Icon>
);

export default Function;