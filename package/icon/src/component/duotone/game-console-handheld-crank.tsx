
import { Icon, generic } from "../../index";

/**
 * A component that renders the `game-console-handheld-crank` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-console-handheld-crank?s=duotone game-console-handheld-crank}
 * @preview ![game-console-handheld-crank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/game-console-handheld-crank.svg)
 */
const GameConsoleHandheldCrank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-96 0-48 0-176c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm64 32c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32L96 256c-17.7 0-32-14.3-32-32l0-96zm0 240c0-8.8 7.2-16 16-16l16 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16-16 0c-8.8 0-16-7.2-16-16zm208-8a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm80 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM480 168l0 56 48 0 24 0c13.3 0 24-10.7 24-24l0-32c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24z" />
        <path d="M96 96c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L96 96zM528 296l0-72-48 0 0 48-32 0 0 48 56 0c13.3 0 24-10.7 24-24z" />
    </Icon>
);

export default GameConsoleHandheldCrank;