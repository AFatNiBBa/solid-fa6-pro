
import { Icon, generic } from "../../index";

/**
 * A component that renders the `champagne-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/champagne-glass?s=sharp-duotone-solid champagne-glass}
 * @preview ![champagne-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/champagne-glass.svg)
 */
const ChampagneGlass: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M34.3 226.5c0 57.4 39.3 107.1 93.7 121.4L128 448l-48 0-32 0 0 64 32 0 80 0 80 0 32 0 0-64-32 0-48 0 0-100.1c54.4-14.2 93.7-63.9 93.7-121.4c0-5.7-.4-11.4-1.2-17.2L256 0 64 0 35.5 209.3c-.8 5.8-1.2 11.5-1.2 17.2zM98.9 218c4.1-30 8.2-60 12.3-90c2.9-21.3 5.8-42.7 8.7-64l80.3 0c2.9 21.3 5.8 42.7 8.7 64c4.1 30 8.2 60 12.3 90c.4 2.8 .6 5.7 .6 8.5c0 33.5-27.2 61.6-61.7 61.6c-37.4 0-66.2-33-61.1-70z" />
        <path d="M111.1 128L98.9 218c-5.1 37 23.7 70 61.1 70s66.2-33 61.1-70l-12.3-90-97.7 0z" />
    </Icon>
);

export default ChampagneGlass;