
import { Icon } from "../../index";

/**
 * A component that renders the `suitcase-rolling` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase-rolling?s=sharp-solid suitcase-rolling}
 * @preview ![suitcase-rolling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/suitcase-rolling.svg)
 */
const SuitcaseRolling: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M120 0L96 0l0 24 0 104L0 128 0 480l64 0 0 32 64 0 0-32 128 0 0 32 64 0 0-32 64 0 0-352-96 0 0-104 0-24L264 0 120 0zM240 128l-96 0 0-80 96 0 0 80zM112 224l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zm0 128l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0z" />
    </Icon>
);

export default SuitcaseRolling;