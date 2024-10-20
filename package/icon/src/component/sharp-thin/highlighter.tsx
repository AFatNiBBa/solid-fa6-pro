
import { Icon } from "../../index";

/**
 * A component that renders the `highlighter` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter?s=sharp-thin highlighter}
 * @preview ![highlighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/highlighter.svg)
 */
const Highlighter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M231.4 416l88.6 0L544 80 464 0 128 224l0 88.6L75.3 365.3 64 376.6l11.3 11.3 80.8 80.8L167.4 480l11.3-11.3L231.4 416zm-64 41.4L86.6 376.6l52.7-52.7 4.7-4.7 0-6.6 0-80.1 46.4-30.9 152 152L311.4 400l-80 0-6.6 0-4.7 4.7-52.7 52.7zm36.5-264.8l258-172L523.4 82l-172 258L203.9 192.6zM2.3 474.3L0 476.7 0 480l0 24 0 8 8 0 88 0 3.3 0 2.3-2.3 30.7-30.7-11.3-11.3L92.7 496 16 496l0-12.7 60.4-60.4L65.1 411.6 2.3 474.3z" />
    </Icon>
);

export default Highlighter;