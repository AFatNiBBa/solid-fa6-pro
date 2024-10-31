
import { Icon } from "../../index";

/**
 * A component that renders the `archway` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=sharp-light archway}
 * @preview ![archway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/archway.svg)
 */
const Archway: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l16 0 16 0 32 0 384 0 32 0 16 0 16 0 0 32-16 0-16 0 0 384 16 0 16 0 0 32-16 0-16 0-32 0-24 0-16 0-24 0-32 0 0-32 0-96c0-53-43-96-96-96s-96 43-96 96l0 96 0 32-32 0-24 0-16 0-24 0-32 0-16 0L0 480l0-32 16 0 16 0L32 64 16 64 0 64 0 32zM64 64l0 64 384 0 0-64L64 64zm0 96l0 288 24 0 16 0 24 0 0-96c0-70.7 57.3-128 128-128s128 57.3 128 128l0 96 24 0 16 0 24 0 0-288L64 160z" />
    </Icon>
);

export default Archway;