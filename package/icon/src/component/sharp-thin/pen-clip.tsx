
import { Icon } from "../../index";

/**
 * A component that renders the `pen-clip` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-clip?s=sharp-thin pen-clip}
 * @preview ![pen-clip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pen-clip.svg)
 */
const PenClip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 512l3.4-17L32 352 282.3 101.7 240 59.3 109.7 189.7l-5.7 5.7L92.7 184l5.7-5.7 136-136 5.7-5.7 5.7 5.7 48 48 79-79L384 0l11.3 11.3L500.7 116.7 512 128l-11.3 11.3-79 79s0 0 0 0l-11.3 11.3s0 0 0 0L160 480 17 508.6 0 512zM410.3 207l79-79L384 22.6l-79 79L410.3 207zM293.7 113L46.7 359.9 20.4 491.6l131.7-26.3L399 218.3 293.7 113z" />
    </Icon>
);

export default PenClip;