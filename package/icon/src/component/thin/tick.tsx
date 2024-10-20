
import { Icon } from "../../index";

/**
 * A component that renders the `tick` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tick?s=thin tick}
 * @preview ![tick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tick.svg)
 */
const Tick: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M48 96c0-26.5 21.5-48 48-48s48 21.5 48 48l0 7.9c0 4.2-.5 8.3-1.4 12.4L109.7 261.1c-1.5 6.4-7.1 10.9-13.7 10.9s-12.3-4.5-13.7-10.9L49.4 116.3c-.9-4.1-1.4-8.2-1.4-12.4L48 96zM32 96l0 7.9c0 5.4 .6 10.7 1.8 15.9L66.7 264.6C69.8 278.3 82 288 96 288s26.2-9.7 29.3-23.4l32.9-144.7c1.2-5.2 1.8-10.6 1.8-15.9l0-7.9c0-35.3-28.7-64-64-64S32 60.7 32 96z" />
    </Icon>
);

export default Tick;