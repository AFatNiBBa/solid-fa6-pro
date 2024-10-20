
import { Icon } from "../../index";

/**
 * A component that renders the `piano-keyboard` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano-keyboard?s=thin piano-keyboard}
 * @preview ![piano-keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/piano-keyboard.svg)
 */
const PianoKeyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 224l0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72 48 0zM416 335.2l0 96.8-120 0 0-96.8c18.3-3.7 32-19.8 32-39.2l0-72 56 0 0 72c0 19.4 13.7 35.5 32 39.2zM432 432l0-96.8c18.3-3.7 32-19.8 32-39.2l0-72 96 0 0 160c0 26.5-21.5 48-48 48l-80 0zm-152 0l-120 0 0-96.8c18.3-3.7 32-19.8 32-39.2l0-72 56 0 0 72c0 19.4 13.7 35.5 32 39.2l0 96.8zm-136 0l-80 0c-26.5 0-48-21.5-48-48l0-160 96 0 0 72c0 19.4 13.7 35.5 32 39.2l0 96.8zm8-112c-13.3 0-24-10.7-24-24l0-72 48 0 0 72c0 13.3-10.7 24-24 24zm136 0c-13.3 0-24-10.7-24-24l0-72 48 0 0 72c0 13.3-10.7 24-24 24zM456 208l-64 0-72 0-64 0-72 0-64 0L16 208l0-80c0-26.5 21.5-48 48-48l448 0c26.5 0 48 21.5 48 48l0 80-104 0zm120 0l0-80c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128l0 80 0 8 0 8L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-160 0-8 0-8z" />
    </Icon>
);

export default PianoKeyboard;