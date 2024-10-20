
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-collar` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-collar?s=regular pipe-collar}
 * @preview ![pipe-collar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pipe-collar.svg)
 */
const PipeCollar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M109.3 18.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L35.4 126C12.9 164.1 0 208.5 0 256s12.9 91.9 35.4 130L18.7 402.7c-25 25-25 65.5 0 90.5s65.5 25 90.5 0L126 476.6c38.1 22.5 82.6 35.4 130 35.4s91.9-12.9 130-35.4l16.7 16.7c25 25 65.5 25 90.5 0s25-65.5 0-90.5L476.6 386c22.5-38.1 35.4-82.6 35.4-130s-12.9-91.9-35.4-130l16.7-16.7c25-25 25-65.5 0-90.5s-65.5-25-90.5 0L386 35.4C347.9 12.9 303.5 0 256 0s-91.9 12.9-130 35.4L109.3 18.7zM48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zM256 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 272a160 160 0 1 0 0-320 160 160 0 1 0 0 320zM48 64a16 16 0 1 1 32 0A16 16 0 1 1 48 64zm0 384a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm400-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM432 64a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default PipeCollar;