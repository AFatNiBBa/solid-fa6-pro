
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vault` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vault?s=duotone vault}
 * @preview ![vault](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/vault.svg)
 */
const Vault: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 416c0 35.3 28.7 64 64 64l16 0 16 32 64 0 16-32 224 0 16 32 64 0 16-32 16 0c35.3 0 64-28.7 64-64l0-352c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zM384 240A160 160 0 1 1 64 240a160 160 0 1 1 320 0zm32-64c0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3L480 336c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-114.7c-18.6-6.6-32-24.4-32-45.3z" />
        <path d="M304 240a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM64 240a160 160 0 1 1 320 0A160 160 0 1 1 64 240zm448-64c0 20.9-13.4 38.7-32 45.3L480 336c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-114.7c-18.6-6.6-32-24.4-32-45.3c0-26.5 21.5-48 48-48s48 21.5 48 48z" />
    </Icon>
);

export default Vault;