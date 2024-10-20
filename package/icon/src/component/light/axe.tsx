
import { Icon } from "../../index";

/**
 * A component that renders the `axe` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/axe?s=light axe}
 * @preview ![axe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/axe.svg)
 */
const Axe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M502.6 182.6L352 32l-96 96L406.6 278.6c6 6 9.4 14.1 9.4 22.6l0 82.7c106 0 192-86 192-192l-82.7 0c-8.5 0-16.6-3.4-22.6-9.4zM473.3 108l52 52 82.7 0c17.7 0 32 14.3 32 32c0 123.7-100.3 224-224 224c-17.7 0-32-14.3-32-32l0-82.7L233.4 150.6c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0L404 38.7 433.4 9.4c12.5-12.5 32.8-12.5 45.3 0l24 24c12.5 12.5 12.5 32.8 0 45.3L473.3 108zM450.6 85.4L480 56 456 32 426.6 61.4l24 24zM262.7 225.3L32 456l24 24L286.7 249.3l22.6 22.6L78.6 502.6c-12.5 12.5-32.8 12.5-45.3 0l-24-24c-12.5-12.5-12.5-32.8 0-45.3L240.1 202.6l22.6 22.6z" />
    </Icon>
);

export default Axe;