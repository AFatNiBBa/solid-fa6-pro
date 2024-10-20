
import { Icon } from "../../index";

/**
 * A component that renders the `archway` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=sharp-regular archway}
 * @preview ![archway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/archway.svg)
 */
const Archway: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l24 0 8 0 48 0 352 0 48 0 24 0 0 48-24 0 0 352 8 0 24 0 0 48-24 0-8 0-48 0-8 0-24 0-16 0-48 0 0-48 0-96c0-44.2-35.8-80-80-80s-80 35.8-80 80l0 96 0 48-48 0-16 0-24 0-8 0-48 0-8 0L0 480l0-48 24 0 8 0L32 80l-8 0L0 80 0 32zM80 80l0 32 352 0 0-32L80 80zm0 80l0 272 8 0 24 0 16 0 0-96c0-70.7 57.3-128 128-128s128 57.3 128 128l0 96 16 0 24 0 8 0 0-272L80 160z" />
    </Icon>
);

export default Archway;