
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d20` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d20?s=thin dice-d20}
 * @preview ![dice-d20](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/dice-d20.svg)
 */
const DiceD20: typeof Icon = x => (
    <Icon {...x}>
        <path d="M242.9 22.5L58 133.5l83.6 62.7L242.9 22.5zM48 146l0 213.9 85.6-149.7L48 146zM68.4 384.8L248 492.5l0-100.8L68.4 384.8zM264 492.5L443.6 384.8 264 391.7l0 100.8zM464 359.9L464 146l-85.5 64.2L464 359.9zM454 133.5l-185-111L370.4 196.2 454 133.5zM243.7 3.4c7.6-4.6 17.1-4.6 24.7 0l200 120c7.2 4.3 11.7 12.1 11.7 20.6l0 224c0 8.4-4.4 16.2-11.7 20.6l-200 120c-7.6 4.6-17.1 4.6-24.7 0l-200-120C36.4 384.2 32 376.4 32 368l0-224c0-8.4 4.4-16.2 11.7-20.6l200-120zm-2.6 372L144.4 223.5l-82.9 145 179.6 6.9zM353.4 216l-194.9 0L256 369.1 353.4 216zM256 31.9L157.9 200l196.1 0L256 31.9zm14.9 343.5l179.6-6.9-82.9-145L270.9 375.4z" />
    </Icon>
);

export default DiceD20;