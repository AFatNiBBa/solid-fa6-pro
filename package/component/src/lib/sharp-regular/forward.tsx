
import { Icon } from "../../index";

/**
 * A component that renders the `forward` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=sharp-regular forward}
 * @preview ![forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/forward.svg)
 */
const Forward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M468.7 284.8L512 256l-43.3-28.8L272 96 224 64l0 57.7 0 76.7L48 92.8 0 64l0 56L0 392l0 56 48-28.8L224 313.6l0 76.7 0 57.7 48-32L468.7 284.8zM224 257.6L48 363.2l0-214.4L224 254.4l0 3.2zm48 100.7l0-204.6L425.5 256 272 358.3z" />
    </Icon>
);

export default Forward;