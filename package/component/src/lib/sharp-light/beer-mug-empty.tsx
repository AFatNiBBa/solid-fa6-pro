
import { Icon } from "../../index";

/**
 * A component that renders the `beer-mug-empty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug-empty?s=sharp-light beer-mug-empty}
 * @preview ![beer-mug-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/beer-mug-empty.svg)
 */
const BeerMugEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 64L64 64l0 384 288 0 0-87.6c0-.2 0-.5 0-.7L352 64zm32 306.5l0 77.5 0 32-32 0L64 480l-32 0 0-32L32 64l0-32 32 0 288 0 32 0 0 32 0 32 112 0 16 0 0 16 0 192 0 10.5-9.6 4.2L384 370.5zM384 128l0 207.5 96-42L480 128l-96 0zm-224 0l0 16 0 224 0 16-32 0 0-16 0-224 0-16 32 0zm64 0l0 16 0 224 0 16-32 0 0-16 0-224 0-16 32 0zm64 0l0 16 0 224 0 16-32 0 0-16 0-224 0-16 32 0z" />
    </Icon>
);

export default BeerMugEmpty;