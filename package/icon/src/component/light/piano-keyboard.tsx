
import { Icon } from "../../index";

/**
 * A component that renders the `piano-keyboard` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano-keyboard?s=light piano-keyboard}
 * @preview ![piano-keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/piano-keyboard.svg)
 */
const PianoKeyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 224l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 32 0zM416 333.3l0 82.7-112 0 0-82.7c18.6-6.6 32-24.4 32-45.3l0-64 48 0 0 64c0 20.9 13.4 38.7 32 45.3zM448 416l0-82.7c18.6-6.6 32-24.4 32-45.3l0-64 64 0 0 160c0 17.7-14.3 32-32 32l-64 0zm-16 32l80 0c35.3 0 64-28.7 64-64l0-160 0-16 0-16 0-64c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128l0 64 0 16 0 16L0 384c0 35.3 28.7 64 64 64l80 0 144 0 144 0zM272 416l-112 0 0-82.7c18.6-6.6 32-24.4 32-45.3l0-64 48 0 0 64c0 20.9 13.4 38.7 32 45.3l0 82.7zm-144 0l-64 0c-17.7 0-32-14.3-32-32l0-160 64 0 0 64c0 20.9 13.4 38.7 32 45.3l0 82.7zm16-112c-8.8 0-16-7.2-16-16l0-64 32 0 0 64c0 8.8-7.2 16-16 16zm144 0c-8.8 0-16-7.2-16-16l0-64 32 0 0 64c0 8.8-7.2 16-16 16zM464 192l-64 0-80 0-64 0-80 0-64 0-80 0 0-64c0-17.7 14.3-32 32-32l448 0c17.7 0 32 14.3 32 32l0 64-80 0z" />
    </Icon>
);

export default PianoKeyboard;