
import { Icon, generic } from "../../index";

/**
 * A component that renders the `game-console-handheld` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-console-handheld?s=duotone game-console-handheld}
 * @preview ![game-console-handheld](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/game-console-handheld.svg)
 */
const GameConsoleHandheld: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 352c0 53-43 96-96 96L96 512c-53 0-96-43-96-96L0 64zM64 336c0 8.8 7.2 16 16 16l16 0 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16-16 0c-8.8 0-16 7.2-16 16zM96 80l0 112c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-112c0-8.8-7.2-16-16-16L112 64c-8.8 0-16 7.2-16 16zM208 360a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm64-48a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M96 80c0-8.8 7.2-16 16-16H272c8.8 0 16 7.2 16 16V192c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V80z" />
    </Icon>
);

export default GameConsoleHandheld;