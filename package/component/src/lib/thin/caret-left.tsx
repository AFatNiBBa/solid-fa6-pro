
import { Icon } from "../../index";

/**
 * A component that renders the `caret-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-left?s=thin caret-left}
 * @preview ![caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/caret-left.svg)
 */
const CaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M22.6 271.4c-4.2-4-6.6-9.6-6.6-15.4s2.4-11.4 6.6-15.4L154.7 115.5c2.3-2.2 5.4-3.5 8.7-3.5c7 0 12.6 5.6 12.6 12.6l0 262.8c0 7-5.6 12.6-12.6 12.6c-3.2 0-6.3-1.2-8.7-3.5L22.6 271.4zM11.6 283L143.7 408.2c5.3 5 12.4 7.8 19.7 7.8c15.8 0 28.6-12.8 28.6-28.6l0-262.8c0-15.8-12.8-28.6-28.6-28.6c-7.3 0-14.4 2.8-19.7 7.8L11.6 229C4.2 236 0 245.8 0 256s4.2 20 11.6 27z" />
    </Icon>
);

export default CaretLeft;