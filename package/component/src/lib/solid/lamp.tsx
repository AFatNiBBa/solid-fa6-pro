
import { Icon } from "../../index";

/**
 * A component that renders the `lamp` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp?s=solid lamp}
 * @preview ![lamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/lamp.svg)
 */
const Lamp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M82.5 19.7C87.4 7.8 99.1 0 112 0L336 0c12.9 0 24.6 7.8 29.5 19.7l80 192c4.1 9.9 3 21.2-2.9 30.1s-15.9 14.2-26.6 14.2L32 256c-10.7 0-20.7-5.3-26.6-14.2s-7-20.2-2.9-30.1l80-192zM160 288l128 0 0 32s64 50.5 64 112c0 24.4-8.3 44.6-16.4 58.7c-8.5 14.7-25.2 21.3-42.1 21.3l-139 0c-17 0-33.6-6.6-42.1-21.3C104.3 476.6 96 456.4 96 432c0-61.5 64-112 64-112l0-32z" />
    </Icon>
);

export default Lamp;