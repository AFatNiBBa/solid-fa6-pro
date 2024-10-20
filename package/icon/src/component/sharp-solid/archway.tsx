
import { Icon } from "../../index";

/**
 * A component that renders the `archway` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=sharp-solid archway}
 * @preview ![archway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/archway.svg)
 */
const Archway: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l32 0 448 0 32 0 0 64-32 0L32 96 0 96 0 32zM0 416l32 0 0-288 448 0 0 288 32 0 0 64-32 0-64 0-32 0-32 0 0-128c0-53-43-96-96-96s-96 43-96 96l0 128-32 0-32 0-64 0L0 480l0-64z" />
    </Icon>
);

export default Archway;