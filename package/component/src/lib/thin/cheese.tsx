
import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=thin cheese}
 * @preview ![cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/cheese.svg)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M495.9 240L27.3 240l263-189.9c1.9-1.3 4.1-2.1 6.4-2.1C404.3 48 492 133.3 495.9 240zM16 256.4c0-.1 0-.2 0-.4l480 0 0 160c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-159.6zm496-.4l0-8.7C512 128.4 415.6 32 296.7 32c-5.7 0-11.2 1.8-15.8 5.1L13.3 230.4C4.9 236.4 0 246.1 0 256.4L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-160z" />
    </Icon>
);

export default Cheese;