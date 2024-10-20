
import { Icon } from "../../index";

/**
 * A component that renders the `ballot-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ballot-check?s=sharp-regular ballot-check}
 * @preview ![ballot-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ballot-check.svg)
 */
const BallotCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 48l0 416L48 464 48 48l352 0zM48 0L0 0 0 48 0 464l0 48 48 0 352 0 48 0 0-48 0-416 0-48L400 0 48 0zM80 96l0 64 64 0 0-64L80 96zm64 320l0-64-64 0 0 64 64 0zm32-312l0 48 24 0 144 0 24 0 0-48-24 0-144 0-24 0zm32 128l0 48 24 0 112 0 24 0 0-48-24 0-112 0-24 0zM176 360l0 48 24 0 144 0 24 0 0-48-24 0-144 0-24 0zm-4.7-116.7L182.6 232 160 209.4l-11.3 11.3L112 257.4 99.3 244.7 88 233.4 65.4 256l11.3 11.3 24 24L112 302.6l11.3-11.3 48-48z" />
    </Icon>
);

export default BallotCheck;