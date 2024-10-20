
import { Icon } from "../../index";

/**
 * A component that renders the `high-definition` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/high-definition?s=thin high-definition}
 * @preview ![high-definition](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/high-definition.svg)
 */
const HighDefinition: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM320 168l0 176c0 4.4 3.6 8 8 8l56 0c53 0 96-43 96-96s-43-96-96-96l-56 0c-4.4 0-8 3.6-8 8zm64 8c44.2 0 80 35.8 80 80s-35.8 80-80 80l-48 0 0-160 48 0zm-256-8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 88 0 88c0 4.4 3.6 8 8 8s8-3.6 8-8l0-80 128 0 0 80c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88 0-88c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 80-128 0 0-80z" />
    </Icon>
);

export default HighDefinition;