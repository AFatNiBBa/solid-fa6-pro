
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-circle-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-circle-exclamation?s=duotone plane-circle-exclamation}
 * @preview ![plane-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/plane-circle-exclamation.svg)
 */
const PlaneCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 297.3l0 65.5c0 10.6 10.2 18.3 20.4 15.4l171.6-49 0 70.9-57.6 43.2c-4 3-6.4 7.8-6.4 12.8l0 42c0 7.8 6.3 14 14 14c1.3 0 2.6-.2 3.9-.5L256 480l110.1 31.5c1.3 .4 2.6 .5 3.9 .5c6 0 11.1-3.7 13.1-9C344.5 470.7 320 422.2 320 368c0-60.6 30.6-114 77.1-145.6L320 178.3l0-84.6C320 59.5 292 0 256 0c-35 0-64 59.5-64 93.7l0 84.6L8.1 283.4c-5 2.8-8.1 8.2-8.1 13.9z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm168 72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-8-152c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80z" />
    </Icon>
);

export default PlaneCircleExclamation;