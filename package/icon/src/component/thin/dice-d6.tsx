
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d6` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d6?s=thin dice-d6}
 * @preview ![dice-d6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/dice-d6.svg)
 */
const DiceD6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0c5.2 0 10.4 1.4 14.9 4.1L436.2 121c7.3 4.3 11.8 12.2 11.8 20.6l0 228.6c0 8.5-4.5 16.3-11.8 20.6L237.7 508.6c-3.7 2.2-7.9 3.4-12.2 3.4l-2.8 0c-4.3 0-8.5-1.2-12.2-3.4L11.8 391C4.5 386.6 0 378.8 0 370.3L0 141.7c0-8.5 4.5-16.3 11.8-20.6L209.1 4.1C213.6 1.4 218.8 0 224 0zM27.4 130.4L223.9 246.7l193.9-118L230.7 17.8c-2-1.2-4.4-1.8-6.7-1.8s-4.7 .6-6.7 1.8L27.4 130.4zM16 142.2l0 228.1c0 2.8 1.5 5.4 3.9 6.9L216 493.4l0-232.8L16 142.2zM222.5 496c0 0 0 0 .1 0l2.8 0c0 0 0 0 .1 0l-3 0zm9.5-2.6L428.1 377.2c2.4-1.4 3.9-4.1 3.9-6.9l0-228.6c0-.9-.2-1.8-.4-2.6L232 260.5l0 232.9z" />
    </Icon>
);

export default DiceD6;