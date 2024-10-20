
import { Icon } from "../../index";

/**
 * A component that renders the `whiskey-glass` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass?s=light whiskey-glass}
 * @preview ![whiskey-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/whiskey-glass.svg)
 */
const WhiskeyGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64L60 256l392 0L480 64 32 64zM64.7 288L82 406.9c3.4 23.6 23.7 41.1 47.5 41.1l253 0c23.8 0 44.1-17.5 47.5-41.1L447.3 288 64.7 288zM7.8 43.1C13.9 36 22.7 32 32 32l448 0c9.3 0 18.1 4 24.2 11.1s8.8 16.4 7.5 25.5l-50 342.9c-5.7 39.3-39.4 68.5-79.2 68.5l-253 0c-39.7 0-73.4-29.1-79.2-68.5L.3 68.6C-1 59.4 1.7 50.1 7.8 43.1z" />
    </Icon>
);

export default WhiskeyGlass;