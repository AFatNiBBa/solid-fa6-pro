
import { Icon, generic } from "../../index";

/**
 * A component that renders the `train-track` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-track?s=sharp-duotone-solid train-track}
 * @preview ![train-track](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/train-track.svg)
 */
const TrainTrack: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 352l32 0 30.3 0L40.9 416 32 416 0 416l0-64zM40 224l32 0 32.9 0L83.6 288 72 288l-32 0 0-64zM80 96l32 0 35.6 0c-7.1 21.3-14.2 42.7-21.3 64L112 160l-32 0 0-64zm28.4 320c7.1-21.3 14.2-42.7 21.3-64l316.5 0c7.1 21.3 14.2 42.7 21.3 64l-359.2 0zm42.7-128c7.1-21.3 14.2-42.7 21.3-64l231.2 0c7.1 21.3 14.2 42.7 21.3 64l-273.9 0zm42.7-128c7.1-21.3 14.2-42.7 21.3-64l145.9 0c7.1 21.3 14.2 42.7 21.3 64l-188.5 0zM428.4 96L464 96l32 0 0 64-32 0-14.3 0c-7.1-21.3-14.2-42.7-21.3-64zm42.7 128l32.9 0 32 0 0 64-32 0-11.6 0c-7.1-21.3-14.2-42.7-21.3-64zm42.7 128l30.3 0 32 0 0 64-32 0-8.9 0c-7.1-21.3-14.2-42.7-21.3-64z" />
        <path d="M339.6 32l67.5 0L556.4 480l-67.5 0L339.6 32zM168.9 32l67.5 0L87.1 480l-67.5 0L168.9 32z" />
    </Icon>
);

export default TrainTrack;