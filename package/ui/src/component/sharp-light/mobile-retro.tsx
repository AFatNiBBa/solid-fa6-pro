
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-retro` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-retro?s=sharp-light mobile-retro}
 * @preview ![mobile-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mobile-retro.svg)
 */
const MobileRetro: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M288 32l0 448L32 480 32 32l256 0zM32 0L0 0 0 32 0 480l0 32 32 0 256 0 32 0 0-32 0-448 0-32L288 0 32 0zM224 160l0 64L96 224l0-64 128 0zM96 128l-32 0 0 32 0 64 0 32 32 0 128 0 32 0 0-32 0-64 0-32-32 0L96 128zm8 176l-48 0 0 48 48 0 0-48zM56 384l0 48 48 0 0-48-48 0zm128-80l-48 0 0 48 48 0 0-48zm-48 80l0 48 48 0 0-48-48 0zm128-80l-48 0 0 48 48 0 0-48zm-48 80l0 48 48 0 0-48-48 0zM128 64l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0z" />
    </Icon>
);

export default MobileRetro;