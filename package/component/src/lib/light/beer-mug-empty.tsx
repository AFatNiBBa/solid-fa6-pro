
import { Icon } from "../../index";

/**
 * A component that renders the `beer-mug-empty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug-empty?s=light beer-mug-empty}
 * @preview ![beer-mug-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/beer-mug-empty.svg)
 */
const BeerMugEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 64L64 64l0 352c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-55.6c0-.2 0-.5 0-.7L352 64zm32 306.5l0 45.5c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64L32 64c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32l0 32 64 0c35.3 0 64 28.7 64 64l0 102.1c0 31.8-18.8 60.6-47.9 73.3l-80.1 35zM384 128l0 207.5 67.2-29.4c17.5-7.6 28.8-24.9 28.8-44L480 160c0-17.7-14.3-32-32-32l-64 0zm-240 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zm64 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zm64 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default BeerMugEmpty;