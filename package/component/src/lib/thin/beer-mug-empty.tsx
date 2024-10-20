
import { Icon } from "../../index";

/**
 * A component that renders the `beer-mug-empty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug-empty?s=thin beer-mug-empty}
 * @preview ![beer-mug-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/beer-mug-empty.svg)
 */
const BeerMugEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 48c8.8 0 16 7.2 16 16l0 40 0 263.8 0 .4 0 47.8c0 26.5-21.5 48-48 48L96 464c-26.5 0-48-21.5-48-48L48 64c0-8.8 7.2-16 16-16l288 0zm32 368l0-42.8 84.9-37.1c26.2-11.5 43.1-37.4 43.1-66L512 152c0-30.9-25.1-56-56-56l-72 0 0-32c0-17.7-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64l0 352c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64zm78.4-94.6L384 355.8 384 112l72 0c22.1 0 40 17.9 40 40l0 118.1c0 22.2-13.2 42.4-33.6 51.3zM144 136c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 240c0 4.4 3.6 8 8 8s8-3.6 8-8l0-240zm72 0c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 240c0 4.4 3.6 8 8 8s8-3.6 8-8l0-240zm72 0c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 240c0 4.4 3.6 8 8 8s8-3.6 8-8l0-240z" />
    </Icon>
);

export default BeerMugEmpty;