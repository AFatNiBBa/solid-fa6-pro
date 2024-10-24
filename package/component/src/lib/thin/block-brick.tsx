
import { Icon } from "../../index";

/**
 * A component that renders the `block-brick` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-brick?s=thin block-brick}
 * @preview ![block-brick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/block-brick.svg)
 */
const BlockBrick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 48l0 80 88 0 16 0 88 0 0-80L128 48zm-16 80l0-80L64 48C37.5 48 16 69.5 16 96l0 32 96 0zM16 144l0 104 200 0 0-104L16 144zm0 224l96 0 0-104-96 0 0 104zm0 16l0 32c0 26.5 21.5 48 48 48l152 0 0-80-88 0-16 0-96 0zm112-16l192 0 0-104-192 0 0 104zm208 0l96 0 0-104-96 0 0 104zm96 16l-96 0-16 0-88 0 0 80 152 0c26.5 0 48-21.5 48-48l0-32zm0-240l-200 0 0 104 200 0 0-104zm0-16l0-32c0-26.5-21.5-48-48-48l-48 0 0 80 96 0zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default BlockBrick;