
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-xmark` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-xmark?s=light rectangle-xmark}
 * @preview ![rectangle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/rectangle-xmark.svg)
 */
const RectangleXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm180.7 84.7c6.2-6.2 16.4-6.2 22.6 0L256 233.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L233.4 256l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6z" />
    </Icon>
);

export default RectangleXmark;