
import { Icon } from "../../index";

/**
 * A component that renders the `helmet-battle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-battle?s=sharp-regular helmet-battle}
 * @preview ![helmet-battle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/helmet-battle.svg)
 */
const HelmetBattle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 256L0 256l0-32L64 0l0 256zm32-32C96 80 288 0 288 0s192 80 192 224c0 80 32 192 32 192L320 512l-64 0L64 416s32-112 32-192zM449 359.9c-8.2-38.8-17-90.8-17-135.9c0-49.6-33.5-93.3-77.8-128.4C333 78.8 311.5 65.8 295.1 57c-2.5-1.4-4.9-2.6-7.1-3.8c-2.2 1.2-4.6 2.4-7.1 3.8c-16.3 8.8-37.8 21.9-59.1 38.7C177.5 130.7 144 174.4 144 224c0 45.1-8.9 97.1-17 135.9c-2.3 11.1-4.7 21.4-6.8 30.5L264 462.3 264 288l-88-32 0-32 224 0 0 32-88 32 0 174.3 143.9-71.9c-2.2-9.1-4.5-19.4-6.8-30.5zM512 0l64 224 0 32-64 0L512 0z" />
    </Icon>
);

export default HelmetBattle;