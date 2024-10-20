
import { Icon, generic } from "../../index";

/**
 * A component that renders the `starship-freighter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starship-freighter?s=duotone starship-freighter}
 * @preview ![starship-freighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/starship-freighter.svg)
 */
const StarshipFreighter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 132.3 100.3 32 224 32c42.3 0 84.2 7.9 123.6 23.2l207.9 80.9c12.3 4.8 20.4 16.6 20.4 29.8l0 42.1c0 8.8-7.2 16-16 16l-114.3 0L432 224c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l13.7 0L560 288c8.8 0 16 7.2 16 16l0 42.1c0 13.2-8.1 25-20.4 29.8l-82.1 31.9c-4.2-7.1-10.1-13.1-17.2-17.3c-3.6-2.1-7.4-3.7-11.5-4.9c-2-.6-4.1-1-6.3-1.3c-1.1-.1-2.1-.3-3.2-.3s-2.2-.1-3.3-.1l-48.4 0L301.1 277.3c1.9-6.8 2.9-13.9 2.9-21.3c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80l1.2 0L322 461.4c.9 1.2 1.9 2.3 2.9 3.4C292.3 474.8 258.2 480 224 480C100.3 480 0 379.7 0 256zm64 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm32-96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 192a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M128 160a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM301.1 277.3c1.9-6.8 2.9-13.9 2.9-21.3c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80l1.2 0L322 461.4c9.1 11.8 23.1 18.6 38 18.6l72 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-48.4 0L301.1 277.3zM192 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM80 272a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm32 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default StarshipFreighter;