
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d20` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d20?s=regular dice-d20}
 * @preview ![dice-d20](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dice-d20.svg)
 */
const DiceD20: typeof Icon = x => (
    <Icon {...x}>
        <path d="M243.7 3.4c7.6-4.6 17.1-4.6 24.7 0l200 120c7.2 4.3 11.7 12.1 11.7 20.6l0 224c0 8.4-4.4 16.2-11.7 20.6l-200 120c-7.6 4.6-17.1 4.6-24.7 0l-200-120C36.4 384.2 32 376.4 32 368l0-224c0-8.4 4.4-16.2 11.7-20.6l200-120zM80 191.1l0 83.4L112.8 215 80 191.1zm65.5 63.9L94.9 347l115 9.2L145.5 255.1zm10.6 145L232 445.6l0-39.5-75.9-6.1zM280 406.2l0 39.5 75.9-45.5L280 406.2zM432 274.6l0-83.4L399.2 215 432 274.6zM375 173.3l37.6-27.3L327.1 94.6 375 173.3zM184.9 94.6L99.4 145.9 137 173.3l47.9-78.6zM256 70.2L186.7 184l138.6 0L256 70.2zM324.3 232l-136.6 0L256 339.3 324.3 232zM302.1 356.2l115-9.2-50.6-92L302.1 356.2z" />
    </Icon>
);

export default DiceD20;