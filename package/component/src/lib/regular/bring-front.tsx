
import { Icon } from "../../index";

/**
 * A component that renders the `bring-front` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-front?s=regular bring-front}
 * @preview ![bring-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bring-front.svg)
 */
const BringFront: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 48l128 0c8.8 0 16 7.2 16 16l48 0c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 192c0 35.3 28.7 64 64 64l64 0 0-48-64 0c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16zM448 512l128 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-64 0 0 48 64 0c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16l-48 0c0 35.3 28.7 64 64 64zM224 96c-35.3 0-64 28.7-64 64l0 192c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L224 96z" />
    </Icon>
);

export default BringFront;