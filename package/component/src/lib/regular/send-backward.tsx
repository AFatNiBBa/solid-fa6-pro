
import { Icon } from "../../index";

/**
 * A component that renders the `send-backward` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-backward?s=regular send-backward}
 * @preview ![send-backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/send-backward.svg)
 */
const SendBackward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 288c0 35.3 28.7 64 64 64l64 0 0-128c0-53 43-96 96-96l128 0 0-64c0-35.3-28.7-64-64-64L64 0zM224 208l224 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zm-64 16l0 224c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-224 0c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default SendBackward;