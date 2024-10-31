
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe-collar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-collar?s=duotone pipe-collar}
 * @preview ![pipe-collar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pipe-collar.svg)
 */
const PipeCollar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 64a16 16 0 1 0 32 0A16 16 0 1 0 48 64zm0 384a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zM96 256a160 160 0 1 0 320 0A160 160 0 1 0 96 256zM432 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 384a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M18.7 18.7c25-25 65.5-25 90.5 0L126 35.4C164.1 12.9 208.5 0 256 0s91.9 12.9 130 35.4l16.7-16.7c25-25 65.5-25 90.5 0s25 65.5 0 90.5L476.6 126c22.5 38.1 35.4 82.6 35.4 130s-12.9 91.9-35.4 130l16.7 16.7c25 25 25 65.5 0 90.5s-65.5 25-90.5 0L386 476.6C347.9 499.1 303.5 512 256 512s-91.9-12.9-130-35.4l-16.7 16.7c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5L35.4 386C12.9 347.9 0 303.5 0 256s12.9-91.9 35.4-130L18.7 109.3c-25-25-25-65.5 0-90.5zM64 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM256 416a160 160 0 1 0 0-320 160 160 0 1 0 0 320zM80 448a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM448 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 368a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default PipeCollar;