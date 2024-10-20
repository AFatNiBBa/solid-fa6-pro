
import { Icon } from "../../index";

/**
 * A component that renders the `ballot-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ballot-check?s=sharp-thin ballot-check}
 * @preview ![ballot-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ballot-check.svg)
 */
const BallotCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 16l0 480L16 496 16 16l416 0zM16 0L0 0 0 16 0 496l0 16 16 0 416 0 16 0 0-16 0-480 0-16L432 0 16 0zM192 120l0 16 8 0 176 0 8 0 0-16-8 0-176 0-8 0zm0 128l0 16 8 0 176 0 8 0 0-16-8 0-176 0-8 0zm0 128l0 16 8 0 176 0 8 0 0-16-8 0-176 0-8 0zm-56-32l-16 0-48 0-16 0 0 16 0 48 0 16 16 0 48 0 16 0 0-16 0-48 0-16zM72 360l16 0 16 0 16 0 0 16 0 16 0 16-16 0-16 0-16 0 0-16 0-16 0-16zM56 88l0 16 0 48 0 16 16 0 48 0 16 0 0-16 0-48 0-16-16 0L72 88 56 88zm32 16l16 0 16 0 0 16 0 16 0 16-16 0-16 0-16 0 0-16 0-16 0-16 16 0zm69.7 125.7l5.7-5.7L152 212.7l-5.7 5.7L96 268.7 69.7 242.3 64 236.7 52.7 248l5.7 5.7 32 32 5.7 5.7 5.7-5.7 56-56z" />
    </Icon>
);

export default BallotCheck;