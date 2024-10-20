
import { Icon, generic } from "../../index";

/**
 * A component that renders the `beer-mug-empty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug-empty?s=duotone beer-mug-empty}
 * @preview ![beer-mug-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/beer-mug-empty.svg)
 */
const BeerMugEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 64c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32l0 32 51.2 0c42.4 0 76.8 34.4 76.8 76.8l0 102.1c0 30.4-17.9 57.9-45.6 70.2L384 381.7l0 34.3c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64L32 64zm96 80l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16s-16 7.2-16 16zm64 0l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16s-16 7.2-16 16zm64 0l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16s-16 7.2-16 16zm128 16l0 151.6 56.4-25.1c4.6-2.1 7.6-6.6 7.6-11.7l0-102.1c0-7.1-5.7-12.8-12.8-12.8L384 160z" />
        <path d="M144 128c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zm64 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zm64 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default BeerMugEmpty;