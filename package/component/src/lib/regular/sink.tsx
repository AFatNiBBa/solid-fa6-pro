
import { Icon } from "../../index";

/**
 * A component that renders the `sink` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sink?s=regular sink}
 * @preview ![sink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sink.svg)
 */
const Sink: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 88c0-22.1 17.9-40 40-40s40 17.9 40 40l0 24c0 13.3 10.7 24 24 24s24-10.7 24-24l0-24c0-48.6-39.4-88-88-88s-88 39.4-88 88l0 200-72 0 0-24c0-30.9-25.1-56-56-56l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c4.4 0 8 3.6 8 8l0 24-88 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l232 0 232 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0 0-24c0-4.4 3.6-8 8-8l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0c-30.9 0-56 25.1-56 56l0 24-72 0 0-200zM32 368l0 24c0 66.3 53.7 120 120 120l208 0c66.3 0 120-53.7 120-120l0-24-48 0 0 24c0 39.8-32.2 72-72 72l-208 0c-39.8 0-72-32.2-72-72l0-24-48 0z" />
    </Icon>
);

export default Sink;