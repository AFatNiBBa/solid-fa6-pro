
import { Icon } from "../../index";

/**
 * A component that renders the `piano-keyboard` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano-keyboard?s=sharp-regular piano-keyboard}
 * @preview ![piano-keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/piano-keyboard.svg)
 */
const PianoKeyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 224l-80 0 0 64 0 32-16 0 0 80 96 0 0-176zM400 400l0-80-16 0 0-32 0-64-64 0 0 64 0 32-16 0 0 80 96 0zm-128 0l0-80-16 0 0-32 0-64-64 0 0 64 0 32-16 0 0 80 96 0zm-128 0l0-80-16 0 0-32 0-64-80 0 0 176 96 0zM528 176l0-64L48 112l0 64 80 0 64 0 64 0 64 0 64 0 64 0 80 0zm48 0l0 24 0 24 0 176 0 48-48 0L48 448 0 448l0-48L0 224l0-24 0-24 0-64L0 64l48 0 480 0 48 0 0 48 0 64z" />
    </Icon>
);

export default PianoKeyboard;