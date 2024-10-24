
import { Icon } from "../../index";

/**
 * A component that renders the `sliders-simple` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders-simple?s=solid sliders-simple}
 * @preview ![sliders-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sliders-simple.svg)
 */
const SlidersSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm90.5 0L480 320c17.7 0 32 14.3 32 32s-14.3 32-32 32l-293.5 0c-13.2 37.3-48.7 64-90.5 64c-53 0-96-43-96-96s43-96 96-96c41.8 0 77.4 26.7 90.5 64zM384 160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-58.5-32c13.2-37.3 48.7-64 90.5-64c53 0 96 43 96 96s-43 96-96 96c-41.8 0-77.4-26.7-90.5-64L32 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l293.5 0z" />
    </Icon>
);

export default SlidersSimple;