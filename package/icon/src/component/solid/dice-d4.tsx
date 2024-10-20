
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d4` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d4?s=solid dice-d4}
 * @preview ![dice-d4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/dice-d4.svg)
 */
const DiceD4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M228.8 .7C235.5 2.8 240 9 240 16l0 480c0 6.3-3.7 12-9.4 14.6s-12.5 1.6-17.2-2.6L5.4 324c-6.1-5.4-7.2-14.5-2.5-21.2l208-296c4-5.7 11.3-8.2 17.9-6.1zm54.4 0c6.7-2.1 13.9 .3 17.9 6.1l208 296c4.7 6.7 3.6 15.8-2.5 21.2l-208 184c-4.7 4.2-11.4 5.2-17.2 2.6s-9.4-8.3-9.4-14.6l0-480c0-7 4.5-13.2 11.2-15.3z" />
    </Icon>
);

export default DiceD4;