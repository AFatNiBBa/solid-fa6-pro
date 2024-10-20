
import { Icon } from "../../index";

/**
 * A component that renders the `pen-clip` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-clip?s=sharp-regular pen-clip}
 * @preview ![pen-clip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pen-clip.svg)
 */
const PenClip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M10.2 461L0 512l51-10.2L160 480 399 241s0 0 0 0L433 207s0 0 0 0l45.1-45.1L512 128 478.1 94.1 448.4 64.4 448 64l-.4-.4L417.9 33.9 384 0 350.1 33.9 305 79 257 31l-17-17L223 31 103 151l-17 17L120 201.9l17-17 103-103 31 31L32 352 10.2 461zM305 146.9L365.1 207 136.3 435.8l-75.1 15 15-75.1L305 146.9z" />
    </Icon>
);

export default PenClip;