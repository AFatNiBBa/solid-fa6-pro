
import { Icon } from "../../index";

/**
 * A component that renders the `hammer` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer?s=sharp-thin hammer}
 * @preview ![hammer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hammer.svg)
 */
const Hammer: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M492.7 147.3l-1.4 1.4L480 160l11.3 11.3 1.4 1.4L504 184l11.3-11.3 1.4-1.4L528 160l11.3 11.3 25.4 25.4L576 208l-11.3 11.3-97.4 97.4L456 328l-11.3-11.3-25.4-25.4L408 280l11.3-11.3 1.4-1.4L432 256l-11.3-11.3-1.4-1.4L408 232l-11.3 11.3-1.4 1.4L384 256l-11.3-11.3L272 144l0-48L193 56.5 176 48l16.3-9.8 33.3-20C245.5 6.3 268.3 0 291.5 0L315 0c33.9 0 66.5 13.5 90.5 37.5l87.2 87.2L504 136l-11.3 11.3zm22.6 48L504 206.6l-11.3-11.3-24-24L457.4 160l11.3-11.3L481.4 136 394.2 48.8C373.2 27.8 344.7 16 315 16l-23.5 0c-20.3 0-40.2 5.5-57.6 16L209.2 46.7l69.9 35 8.8 4.4 0 9.9 0 41.4 96 96 12.7-12.7L408 209.4l11.3 11.3 24 24L454.6 256l-11.3 11.3L430.6 280 456 305.4 553.4 208 528 182.6l-12.7 12.7zM12 405.4L264 181.3l11.3 11.3L23.3 416.7l72 72L319.4 236.6 330.7 248 106.6 500 96 512 84.7 500.7 11.3 427.3 0 416l12-10.6z" />
    </Icon>
);

export default Hammer;