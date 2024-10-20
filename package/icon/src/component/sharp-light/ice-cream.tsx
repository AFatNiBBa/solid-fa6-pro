
import { Icon } from "../../index";

/**
 * A component that renders the `ice-cream` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=sharp-light ice-cream}
 * @preview ![ice-cream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ice-cream.svg)
 */
const IceCream: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0C139.7 0 70.6 65.2 64.4 147.9C36.2 157.7 16 184.5 16 216l0 56 0 16 16 0 32 0 69.5 0 181 0 69.5 0 32 0 16 0 0-16 0-56c0-31.5-20.2-58.3-48.4-68.1C377.4 65.2 308.3 0 224 0zM96 160s0 0 0 0C96 89.3 153.3 32 224 32s128 57.3 128 128l0 .5 0 13.9 13.8 2c19.4 2.8 34.3 19.5 34.3 39.6l0 40-16 0-69.5 0-181 0L64 256l-16 0 0-40c0-20.1 14.9-36.8 34.3-39.6l13.8-2 0-13.9 0-.5zM205 482.4L224 512l19-29.6L347.4 320l-38 0L224 452.8 138.6 320l-38 0L205 482.4z" />
    </Icon>
);

export default IceCream;