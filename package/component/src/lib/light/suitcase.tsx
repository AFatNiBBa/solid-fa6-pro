
import { Icon } from "../../index";

/**
 * A component that renders the `suitcase` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase?s=light suitcase}
 * @preview ![suitcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/suitcase.svg)
 */
const Suitcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 48l0 48 192 0 0-48c0-8.8-7.2-16-16-16L176 32c-8.8 0-16 7.2-16 16zM128 96l0-48c0-26.5 21.5-48 48-48L336 0c26.5 0 48 21.5 48 48l0 48 64 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l64 0zm240 32l-224 0-16 0 0 320 256 0 0-320-16 0zM64 128c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l32 0 0-320-32 0zM448 448c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-32 0 0 320 32 0z" />
    </Icon>
);

export default Suitcase;