
import { Icon } from "../../index";

/**
 * A component that renders the `worm` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/worm?s=solid worm}
 * @preview ![worm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/worm.svg)
 */
const Worm: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 96c0-53 43-96 96-96l38.4 0C439.9 0 480 40.1 480 89.6l0 86.4 0 16 0 184c0 75.1-60.9 136-136 136s-136-60.9-136-136l0-80c0-22.1-17.9-40-40-40s-40 17.9-40 40l0 168c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-168c0-75.1 60.9-136 136-136s136 60.9 136 136l0 80c0 22.1 17.9 40 40 40s40-17.9 40-40l0-184-32 0c-53 0-96-43-96-96zm144-8a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Worm;