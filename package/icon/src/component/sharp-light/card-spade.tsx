
import { Icon } from "../../index";

/**
 * A component that renders the `card-spade` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-spade?s=sharp-light card-spade}
 * @preview ![card-spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/card-spade.svg)
 */
const CardSpade: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32l0 448 320 0 0-448L32 32zM0 0L32 0 352 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM192 120.9l11.3 11.3 33.9 33.9L297 225.9c25 25 25 65.5 0 90.5c-24.5 24.5-63.9 25-89 1.5l0 34.2 16 0 16 0 0 32-16 0-16 0-32 0-16 0-16 0 0-32 16 0 16 0 0-34.2c-25.1 23.5-64.5 23-89-1.5c-25-25-25-65.5 0-90.5l59.7-59.7 33.9-33.9L192 120.9zm0 45.3l-22.6 22.6-59.7 59.7c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l25.8-25.8L192 256.6l11.3 11.3 25.8 25.8c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-59.7-59.7L192 166.1z" />
    </Icon>
);

export default CardSpade;