
import { Icon } from "../../index";

/**
 * A component that renders the `clone` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clone?s=thin clone}
 * @preview ![clone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clone.svg)
 */
const Clone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 496l224 0c26.5 0 48-21.5 48-48l0-64 16 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l64 0 0 16-64 0c-26.5 0-48 21.5-48 48l0 224c0 26.5 21.5 48 48 48zM176 288c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L224 16c-26.5 0-48 21.5-48 48l0 224zm-16 0l0-224c0-35.3 28.7-64 64-64L448 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64z" />
    </Icon>
);

export default Clone;