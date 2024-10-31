
import { Icon } from "../../index";

/**
 * A component that renders the `screencast` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screencast?s=light screencast}
 * @preview ![screencast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/screencast.svg)
 */
const Screencast: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 64L64 64C46.3 64 32 78.3 32 96l0 96.1c-2.7-.1-5.3-.1-8-.1L0 192 0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-224 0 0-24c0-2.7 0-5.3-.1-8L512 448c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32zM16 224c132.5 0 240 107.5 240 240c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-114.9-93.1-208-208-208c-8.8 0-16-7.2-16-16s7.2-16 16-16zM32 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM0 336c0-8.8 7.2-16 16-16c79.5 0 144 64.5 144 144c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9-50.1-112-112-112c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Screencast;