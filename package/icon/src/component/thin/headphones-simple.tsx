
import { Icon } from "../../index";

/**
 * A component that renders the `headphones-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones-simple?s=thin headphones-simple}
 * @preview ![headphones-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/headphones-simple.svg)
 */
const HeadphonesSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 288C16 155.5 123.5 48 256 48s240 107.5 240 240l0 88c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88C512 146.6 397.4 32 256 32S0 146.6 0 288l0 88c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88zm128-16c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16l-16 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l16 0zm-16-16c-44.2 0-80 35.8-80 80l0 64c0 44.2 35.8 80 80 80l16 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32l-16 0zm240 16l16 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-16 0c-8.8 0-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16zm16-16l-16 0c-17.7 0-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32l16 0c44.2 0 80-35.8 80-80l0-64c0-44.2-35.8-80-80-80z" />
    </Icon>
);

export default HeadphonesSimple;