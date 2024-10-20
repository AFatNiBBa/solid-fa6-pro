
import { Icon } from "../../index";

/**
 * A component that renders the `archway` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=regular archway}
 * @preview ![archway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/archway.svg)
 */
const Archway: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 56C0 42.7 10.7 32 24 32l32 0 400 0 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l0 352 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0-32 0-64 0c-13.3 0-24-10.7-24-24l0-120c0-44.2-35.8-80-80-80s-80 35.8-80 80l0 120c0 13.3-10.7 24-24 24l-64 0-32 0-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0L32 80l-8 0C10.7 80 0 69.3 0 56zM80 80l0 32 352 0 0-32L80 80zm0 80l0 272 8 0 40 0 0-96c0-70.7 57.3-128 128-128s128 57.3 128 128l0 96 40 0 8 0 0-272L80 160z" />
    </Icon>
);

export default Archway;