
import { Icon } from "../../index";

/**
 * A component that renders the `card-spade` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-spade?s=light card-spade}
 * @preview ![card-spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/card-spade.svg)
 */
const CardSpade: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L64 32zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm180.7 68.2c6.2-6.2 16.4-6.2 22.6 0l33.9 33.9L297 225.9c25 25 25 65.5 0 90.5c-24.5 24.5-63.9 25-89 1.5l0 34.2 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 0-34.2c-25.1 23.5-64.5 23-89-1.5c-25-25-25-65.5 0-90.5l59.7-59.7 33.9-33.9zM192 166.1l-22.6 22.6-59.7 59.7c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l25.8-25.8c3-3 7.1-4.7 11.3-4.7s8.3 1.7 11.3 4.7l25.8 25.8c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-59.7-59.7L192 166.1z" />
    </Icon>
);

export default CardSpade;