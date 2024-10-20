
import { Icon } from "../../index";

/**
 * A component that renders the `grate` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grate?s=regular grate}
 * @preview ![grate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/grate.svg)
 */
const Grate: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M56 32C25.1 32 0 57.1 0 88L0 256 0 424c0 30.9 25.1 56 56 56l72 0 96 0 96 0 72 0c30.9 0 56-25.1 56-56l0-168 0-168c0-30.9-25.1-56-56-56l-72 0-96 0-96 0L56 32zm48 48l0 152-56 0L48 88c0-4.4 3.6-8 8-8l48 0zM48 280l56 0 0 152-48 0c-4.4 0-8-3.6-8-8l0-144zM152 432l0-152 48 0 0 152-48 0zm96 0l0-152 48 0 0 152-48 0zm96 0l0-152 56 0 0 144c0 4.4-3.6 8-8 8l-48 0zm56-200l-56 0 0-152 48 0c4.4 0 8 3.6 8 8l0 144zM296 80l0 152-48 0 0-152 48 0zm-96 0l0 152-48 0 0-152 48 0z" />
    </Icon>
);

export default Grate;