
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-circle-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-circle-check?s=sharp-thin envelope-circle-check}
 * @preview ![envelope-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/envelope-circle-check.svg)
 */
const EnvelopeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 167.6l240 165L328.1 283c-2.4 7.6-4.3 15.3-5.6 23.3L256 352 16 187l0 245 332.5 0c3.6 5.6 7.6 10.9 11.8 16L16 448 0 448l0-16L0 176 0 80 0 64l16 0 480 0 16 0 0 16 0 80.7c-5.3-.5-10.6-.7-16-.7l0-80L16 80l0 87.6zM496 464a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm75.3 104l-5.7 5.7-80 80-5.7 5.7-5.7-5.7-48-48-5.7-5.7L432 316.7l5.7 5.7L480 364.7l74.3-74.3 5.7-5.7L571.3 296z" />
    </Icon>
);

export default EnvelopeCircleCheck;