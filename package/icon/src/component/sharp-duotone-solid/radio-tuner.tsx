
import { Icon, generic } from "../../index";

/**
 * A component that renders the `radio-tuner` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio-tuner?s=sharp-duotone-solid radio-tuner}
 * @preview ![radio-tuner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/radio-tuner.svg)
 */
const RadioTuner: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128c63.2 0 126.5 0 189.8 0c107.4 0 214.8 0 322.2 0l0 384L0 512 0 128zm64 64l0 64c10.7 0 21.3 0 32 0c106.7 0 213.3 0 320 0c10.7 0 21.3 0 32 0l0-64c-10.7 0-21.3 0-32 0c-106.7 0-213.3 0-320 0c-10.7 0-21.3 0-32 0zm0 144l0 32 16 0 128 0 16 0 0-32-16 0L80 336l-16 0zm16 64l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0zm240-16a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M509 49.6l-23.3 5.7L189.8 128 0 128l0-2.8 18.3-4.5 456-112L497.6 3 509 49.6zM64 192l32 0 320 0 32 0 0 64-32 0L96 256l-32 0 0-64zM320 384a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default RadioTuner;