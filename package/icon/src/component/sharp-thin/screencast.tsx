
import { Icon } from "../../index";

/**
 * A component that renders the `screencast` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screencast?s=sharp-thin screencast}
 * @preview ![screencast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/screencast.svg)
 */
const Screencast: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 48L16 48l0 144.4c-5.3-.3-10.6-.4-16-.4L0 48 0 32l16 0 544 0 16 0 0 16 0 416 0 16-16 0-272 0c0-5.4-.1-10.7-.4-16L560 464l0-416zM0 240l0-16c141.4 0 256 114.6 256 256l-16 0C240 347.5 132.5 240 0 240zM48 448a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM0 448a32 32 0 1 1 64 0A32 32 0 1 1 0 448zm144 32c0-79.5-64.5-144-144-144l0-16c88.4 0 160 71.6 160 160l-16 0z" />
    </Icon>
);

export default Screencast;