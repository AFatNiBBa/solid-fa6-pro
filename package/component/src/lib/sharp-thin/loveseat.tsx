
import { Icon } from "../../index";

/**
 * A component that renders the `loveseat` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/loveseat?s=sharp-thin loveseat}
 * @preview ![loveseat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/loveseat.svg)
 */
const Loveseat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 48L80 48l0 144-16 0L64 48l0-16 16 0 352 0 16 0 0 16 0 144-16 0 0-144zM16 464l96 0 0-224-96 0 0 224zM0 224l16 0 96 0 16 0 0 16 0 48 256 0 0-48 0-16 16 0 96 0 16 0 0 16 0 224 0 16-16 0-96 0-16 0 0-16 0-32-256 0 0 32 0 16-16 0-96 0L0 480l0-16L0 240l0-16zM128 416l256 0 0-112-256 0 0 112zm272 48l96 0 0-224-96 0 0 224z" />
    </Icon>
);

export default Loveseat;