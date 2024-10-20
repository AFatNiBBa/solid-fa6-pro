
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wine-glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass?s=duotone wine-glass}
 * @preview ![wine-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wine-glass.svg)
 */
const WineGlass: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M18.1 197.8c-6 72 42.5 135.2 109.9 150.6l0 99.6-48 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0 80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0 0-99.6c67.4-15.4 115.9-78.6 109.9-150.6l-14-168.4C286.5 12.8 272.6 0 256 0L64 0C47.4 0 33.5 12.8 32.1 29.3l-14 168.4zm63.8 5.3L88.1 128c1.8-21.3 3.6-42.7 5.3-64l133.1 0c1.8 21.3 3.6 42.7 5.3 64c2.1 25 4.2 50 6.3 75.1c.2 2.2 .3 4.4 .3 6.6c0 42.8-34.8 78.3-78.4 78.3s-78.4-35.5-78.4-78.3c0-2.2 .1-4.4 .3-6.6z" />
        <path d="M88.1 128l-6.3 75.1C78 248.8 114.1 288 160 288s82-39.2 78.1-84.9L231.9 128 88.1 128z" />
    </Icon>
);

export default WineGlass;