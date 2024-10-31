
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-circle-plus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-circle-plus?s=duotone heart-circle-plus}
 * @preview ![heart-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/heart-circle-plus.svg)
 */
const HeartCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M39.7 270.5L233.5 470.3c12 13 33 13 45.9 0l5.4-5.6C266.6 436.9 256 403.7 256 368c0-97.2 78.8-176 176-176c26.8 0 52.3 6 75 16.7c13.7-51.1-.9-108.7-43.8-146.1c-55.9-47-137.8-38-187.8 13l-19 21-20-21C208.7 47.4 170.8 32 133.3 32c-30 0-59.7 9.8-83.6 30.7c-62.9 53.9-65.9 149.8-10 207.8z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default HeartCirclePlus;