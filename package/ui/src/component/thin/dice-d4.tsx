
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d4` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d4?s=thin dice-d4}
 * @preview ![dice-d4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/dice-d4.svg)
 */
const DiceD4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248.1 21.1L17.8 307c-1.4 1.7-2 3.8-1.7 6s1.4 4.1 3.1 5.4L248.1 492l0-470.9zm16 470.8L492.8 318.4c1.7-1.3 2.8-3.3 3.1-5.4s-.4-4.3-1.7-6L264.1 21.3l0 470.6zM256 0c7.3 0 14.1 3.3 18.7 8.9l232 288c4.1 5.1 5.9 11.5 5.1 18s-4.1 12.3-9.3 16.2l-232 176c-8.6 6.5-20.4 6.5-29 0l-232-176c-5.2-3.9-8.5-9.8-9.3-16.2s1.1-12.9 5.1-18l232-288C241.9 3.3 248.7 0 256 0z" />
    </Icon>
);

export default DiceD4;