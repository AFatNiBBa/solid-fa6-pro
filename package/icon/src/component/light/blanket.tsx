
import { Icon } from "../../index";

/**
 * A component that renders the `blanket` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blanket?s=light blanket}
 * @preview ![blanket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/blanket.svg)
 */
const Blanket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 128l0 184.4C49 297.2 71.4 288 96 288l296 0c8.6 0 16.7 1.9 24 5.4L416 128c0-35.3-28.7-64-64-64L96 64c-35.3 0-64 28.7-64 64zM0 384L0 128C0 75 43 32 96 32l256 0c53 0 96 43 96 96l0 216c0 30.9-25.1 56-56 56L96 400c-8.8 0-16-7.2-16-16s7.2-16 16-16l296 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L96 320c-35.3 0-64 28.7-64 64s28.7 64 64 64l336 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 480c-53 0-96-43-96-96z" />
    </Icon>
);

export default Blanket;