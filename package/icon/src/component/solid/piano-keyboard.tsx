
import { Icon } from "../../index";

/**
 * A component that renders the `piano-keyboard` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano-keyboard?s=solid piano-keyboard}
 * @preview ![piano-keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/piano-keyboard.svg)
 */
const PianoKeyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM512 224l0 160-80 0 0-68.3c9.6-5.5 16-15.9 16-27.7l0-64 64 0zM400 384l-96 0 0-68.3c9.6-5.5 16-15.9 16-27.7l0-64 64 0 0 64c0 11.8 6.4 22.2 16 27.7l0 68.3zm-128 0l-96 0 0-68.3c9.6-5.5 16-15.9 16-27.7l0-64 64 0 0 64c0 11.8 6.4 22.2 16 27.7l0 68.3zm-128 0l-80 0 0-160 64 0 0 64c0 11.8 6.4 22.2 16 27.7l0 68.3z" />
    </Icon>
);

export default PianoKeyboard;