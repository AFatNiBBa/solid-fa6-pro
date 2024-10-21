
import { Icon } from "../../index";

/**
 * A component that renders the `piano-keyboard` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano-keyboard?s=regular piano-keyboard}
 * @preview ![piano-keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/piano-keyboard.svg)
 */
const PianoKeyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 224l0 160c0 8.8-7.2 16-16 16l-80 0 0-84.3c9.6-5.5 16-15.9 16-27.7l0-64 80 0zM400 400l-96 0 0-84.3c9.6-5.5 16-15.9 16-27.7l0-64 64 0 0 64c0 11.8 6.4 22.2 16 27.7l0 84.3zm-128 0l-96 0 0-84.3c9.6-5.5 16-15.9 16-27.7l0-64 64 0 0 64c0 11.8 6.4 22.2 16 27.7l0 84.3zm-128 0l-80 0c-8.8 0-16-7.2-16-16l0-160 80 0 0 64c0 11.8 6.4 22.2 16 27.7l0 84.3zM528 176l-112 0-128 0-128 0L48 176l0-48c0-8.8 7.2-16 16-16l448 0c8.8 0 16 7.2 16 16l0 48zm48 0l0-48c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128l0 48 0 24 0 24L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-160 0-24 0-24z" />
    </Icon>
);

export default PianoKeyboard;