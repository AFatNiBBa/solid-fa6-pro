
import { Icon } from "../../index";

/**
 * A component that renders the `sprinkler` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sprinkler?s=light sprinkler}
 * @preview ![sprinkler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sprinkler.svg)
 */
const Sprinkler: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 0a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM432 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM32 144A16 16 0 1 1 0 144a16 16 0 1 1 32 0zm128 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm192 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm144-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm-64 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM96 208a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm400 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM32 272A16 16 0 1 1 0 272a16 16 0 1 1 32 0zM96 80A16 16 0 1 1 64 80a16 16 0 1 1 32 0zM32 16A16 16 0 1 1 0 16a16 16 0 1 1 32 0zM256 64c8.8 0 16 7.2 16 16l0 176 120 0c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-89 89 0 86.1c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-86.1-89-89c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8l120 0 0-176c0-8.8 7.2-16 16-16zM139.3 288l75.3 75.3c6 6 9.4 14.1 9.4 22.6l0 86.1c0 4.4 3.6 8 8 8l48 0c4.4 0 8-3.6 8-8l0-86.1c0-8.5 3.4-16.6 9.4-22.6L372.7 288 256 288l-116.7 0z" />
    </Icon>
);

export default Sprinkler;