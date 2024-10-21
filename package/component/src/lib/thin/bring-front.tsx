
import { Icon } from "../../index";

/**
 * A component that renders the `bring-front` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-front?s=thin bring-front}
 * @preview ![bring-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bring-front.svg)
 */
const BringFront: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 16l128 0c26.5 0 48 21.5 48 48l16 0c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 192c0 35.3 28.7 64 64 64l64 0 0-16-64 0c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48zM448 512l128 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-64 0 0 16 64 0c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48l-16 0c0 35.3 28.7 64 64 64zM416 112c26.5 0 48 21.5 48 48l0 192c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-192c0-26.5 21.5-48 48-48l192 0zM224 96c-35.3 0-64 28.7-64 64l0 192c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L224 96zm32 80l128 0c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm-32 16l0 128c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default BringFront;