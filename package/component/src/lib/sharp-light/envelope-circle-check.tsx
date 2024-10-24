
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-circle-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-circle-check?s=sharp-light envelope-circle-check}
 * @preview ![envelope-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/envelope-circle-check.svg)
 */
const EnvelopeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 159.2l224 154L339.2 256c-8 15.6-13.7 32.5-16.7 50.3L256 352 32 198l0 218 307.2 0c5.9 11.4 12.9 22.2 21 32L32 448 0 448l0-32L0 176 0 96 0 64l32 0 448 0 32 0 0 32 0 64.7c-5.3-.5-10.6-.7-16-.7c-6.3 0-12.5 .3-18.6 1l2.6-1.8L480 96 32 96l0 63.2zM496 448a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm78.6 112l-11.3 11.3-72 72L480 398.6l-11.3-11.3-40-40L417.4 336 440 313.4l11.3 11.3L480 353.4l60.7-60.7L552 281.4 574.6 304z" />
    </Icon>
);

export default EnvelopeCircleCheck;