
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-triangle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-triangle?s=sharp-light ruler-triangle}
 * @preview ![ruler-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ruler-triangle.svg)
 */
const RulerTriangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l0 448 448 0 0-2.7-51.3-51.3-17.4 17.4L400 454.6 377.4 432l11.3-11.3 17.4-17.4-57.4-57.4-17.4 17.4L320 374.6 297.4 352l11.3-11.3 17.4-17.4-57.4-57.4-17.4 17.4L240 294.6 217.4 272l11.3-11.3 17.4-17.4-57.4-57.4-17.4 17.4L160 214.6 137.4 192l11.3-11.3 17.4-17.4-57.4-57.4L91.3 123.3 80 134.6 57.4 112l11.3-11.3L86.1 83.3 34.7 32 32 32zM48 0L512 464l0 16 0 32-32 0L32 512 0 512l0-32L0 32 0 0 32 0 48 0zm64 217.4l27.3 27.3 128 128L294.6 400 256 400l-128 0-16 0 0-16 0-128 0-38.6zm32 77.3l0 73.4 73.4 0L144 294.6z" />
    </Icon>
);

export default RulerTriangle;