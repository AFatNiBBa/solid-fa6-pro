
import { Icon } from "../../index";

/**
 * A component that renders the `send-back` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-back?s=light send-back}
 * @preview ![send-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/send-back.svg)
 */
const SendBack: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 32c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32L64 224c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l128 0zM64 0C28.7 0 0 28.7 0 64L0 192c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64L64 0zM576 288c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l128 0zM448 256c-35.3 0-64 28.7-64 64l0 128c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-128 0zM160 288l0 64c0 35.3 28.7 64 64 64l128 0 0-32-128 0c-17.7 0-32-14.3-32-32l0-64-32 0zM416 96L288 96l0 32 128 0c17.7 0 32 14.3 32 32l0 64 32 0 0-64c0-35.3-28.7-64-64-64zm0 96c0-17.7-14.3-32-32-32l-96 0 0 32 96 0 0 56.4c9.2-8.3 20.1-14.8 32-19l0-37.5zM256 320l0-56.4c-9.2 8.3-20.1 14.8-32 19l0 37.5c0 17.7 14.3 32 32 32l96 0 0-32-96 0z" />
    </Icon>
);

export default SendBack;