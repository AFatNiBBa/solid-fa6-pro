
import { Icon } from "../../index";

/**
 * A component that renders the `reel` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reel?s=sharp-light reel}
 * @preview ![reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/reel.svg)
 */
const Reel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 0L16 0 80 0 368 0l64 0 16 0 0 32-16 0-48 0 0 64 0 16-16 0L80 112l-16 0 0-16 0-64L16 32 0 32 0 0zM96 32l0 48 256 0 0-48L96 32zM64 144l16 0 288 0 16 0 0 32-16 0L80 176l-16 0 0-32zm0 64l16 0 352 0 16 0 0 32-16 0L80 240l-16 0 0-32zm0 64l16 0 288 0 16 0 0 32-16 0L80 304l-16 0 0-32zm0 64l16 0 288 0 16 0 0 32-16 0L80 368l-16 0 0-32zM16 512L0 512l0-32 16 0 48 0 0-64 0-16 16 0 288 0 16 0 0 16 0 64 48 0 16 0 0 32-16 0-64 0L80 512l-64 0zm80-80l0 48 256 0 0-48L96 432z" />
    </Icon>
);

export default Reel;