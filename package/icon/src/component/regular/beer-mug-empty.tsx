
import { Icon } from "../../index";

/**
 * A component that renders the `beer-mug-empty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug-empty?s=regular beer-mug-empty}
 * @preview ![beer-mug-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/beer-mug-empty.svg)
 */
const BeerMugEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 80l0 336c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-47.4c0-.4 0-.7 0-1.1L336 80 80 80zM384 383.7l0 32.3c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64L32 64c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32l0 32 59.2 0c38 0 68.8 30.8 68.8 68.8l0 117.9c0 27.3-16.2 52.1-41.2 63l-86.8 38zM384 144l0 187.3 67.5-29.5c7.6-3.3 12.5-10.8 12.5-19.1l0-117.9c0-11.5-9.3-20.8-20.8-20.8L384 144zM144 128c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zm64 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zm64 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default BeerMugEmpty;