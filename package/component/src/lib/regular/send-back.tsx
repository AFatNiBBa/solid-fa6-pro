
import { Icon } from "../../index";

/**
 * A component that renders the `send-back` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-back?s=regular send-back}
 * @preview ![send-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/send-back.svg)
 */
const SendBack: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 48c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16L64 208c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l128 0zM64 0C28.7 0 0 28.7 0 64L0 192c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64L64 0zM576 304c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16l128 0zM448 256c-35.3 0-64 28.7-64 64l0 128c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-128 0zM160 288l0 64c0 35.3 28.7 64 64 64l128 0 0-96c0-53 43-96 96-96l32 0 0-64c0-35.3-28.7-64-64-64L288 96l0 96c0 53-43 96-96 96l-32 0z" />
    </Icon>
);

export default SendBack;