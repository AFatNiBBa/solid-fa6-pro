
import { Icon } from "../../index";

/**
 * A component that renders the `forward` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=sharp-thin forward}
 * @preview ![forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/forward.svg)
 */
const Forward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M497.6 265.6L512 256l-14.4-9.6L240 74.7 224 64l0 19.2 0 115.2L16 73.6 0 64 0 82.7 0 429.3 0 448l16-9.6L224 313.6l0 115.2 0 19.2 16-10.7L497.6 265.6zM224 294.9L16 419.7 16 92.3 224 217.1l0 77.9zm16 123.2l0-324.2L483.2 256 240 418.1z" />
    </Icon>
);

export default Forward;