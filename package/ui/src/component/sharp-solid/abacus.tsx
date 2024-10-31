
import { Icon } from "../../index";

/**
 * A component that renders the `abacus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/abacus?s=sharp-solid abacus}
 * @preview ![abacus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/abacus.svg)
 */
const Abacus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 96l0 112-64 0 0-32 8 0 24 0 0-48-24 0-8 0 0-32 64 0zm-96 32l-8 0-24 0 0 48 24 0 8 0 0 32-128 0 0-32 8 0 24 0 0-48-24 0-8 0 0-32 128 0 0 32zm-160 0l-8 0-24 0 0 48 24 0 8 0 0 32-96 0 0-32 8 0 24 0 0-48-24 0-8 0 0-32 96 0 0 32zm-128 0l-8 0-24 0 0 48 24 0 8 0 0 32-64 0L64 96l64 0 0 32zM64 416l0-176 64 0 0 24-8 0-24 0 0 48 24 0 8 0 0 24-8 0-24 0 0 48 24 0 8 0 0 32-64 0zm96-32l8 0 24 0 0-48-24 0-8 0 0-24 8 0 24 0 0-48-24 0-8 0 0-24 96 0 0 24-8 0-24 0 0 48 24 0 8 0 0 24-8 0-24 0 0 48 24 0 8 0 0 32-96 0 0-32zm128-72l8 0 24 0 0-48-24 0-8 0 0-24 128 0 0 96-8 0-24 0 0 48 24 0 8 0 0 32-128 0 0-32 8 0 24 0 0-48-24 0-8 0 0-24zm160 72l8 0 24 0 0-48-24 0-8 0 0-96 64 0 0 176-64 0 0-32zM64 32L0 32 0 96 0 416l0 64 64 0 448 0 64 0 0-64 0-320 0-64-64 0L64 32z" />
    </Icon>
);

export default Abacus;