
import { Icon } from "../../index";

/**
 * A component that renders the `radio-tuner` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio-tuner?s=regular radio-tuner}
 * @preview ![radio-tuner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/radio-tuner.svg)
 */
const RadioTuner: typeof Icon = x => (
    <Icon {...x}>
        <path d="M511.1 17.6c3.5 12.8-4 26-16.8 29.5L201.2 128 448 128c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 304 0 192l0-3.4c0-32.4 21.6-60.8 52.9-69.4L481.6 .9c12.8-3.5 26 4 29.5 16.8zM48 272l0 32 0 144c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-176L48 272zm256 96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM96 320l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 352c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 64l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default RadioTuner;