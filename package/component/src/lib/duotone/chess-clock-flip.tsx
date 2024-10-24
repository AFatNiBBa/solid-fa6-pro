
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-clock-flip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock-flip?s=duotone chess-clock-flip}
 * @preview ![chess-clock-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chess-clock-flip.svg)
 */
const ChessClockFlip: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 112c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16l0 16L96 128l0-16zm68.7 180.7l48-48c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-48 48c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zM384 56c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 48-48 0 0-48-32 0c-13.3 0-24-10.7-24-24zm64 184c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64z" />
        <path d="M0 192c0-35.3 28.7-64 64-64l512 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192zM288 304A112 112 0 1 0 64 304a112 112 0 1 0 224 0zM464 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" />
    </Icon>
);

export default ChessClockFlip;