
import { Icon } from "../../index";

/**
 * A component that renders the `paint-roller` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paint-roller?s=regular paint-roller}
 * @preview ![paint-roller](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/paint-roller.svg)
 */
const PaintRoller: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 48L64 48c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zM64 0L352 0c35.3 0 64 28.7 64 64l0 8 0 48 0 8c0 35.3-28.7 64-64 64L64 192c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0zm96 352c0-17.7 14.3-32 32-32l8 0 0-16c0-39.8 32.2-72 72-72l152 0c22.1 0 40-17.9 40-40l0-48c0-10.4-6.7-19.3-16-22.6l0-48.9c36 4 64 34.5 64 71.6l0 48c0 48.6-39.4 88-88 88l-152 0c-13.3 0-24 10.7-24 24l0 16 8 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128z" />
    </Icon>
);

export default PaintRoller;