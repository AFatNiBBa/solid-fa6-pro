
import { Icon, generic } from "../../index";

/**
 * A component that renders the `train-track` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-track?s=duotone train-track}
 * @preview ![train-track](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/train-track.svg)
 */
const TrainTrack: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 384c0-17.7 14.3-32 32-32l30.3 0L40.9 416 32 416c-17.7 0-32-14.3-32-32zM40 256c0-17.7 14.3-32 32-32l32.9 0L83.6 288 72 288c-17.7 0-32-14.3-32-32zM80 128c0-17.7 14.3-32 32-32l35.6 0c-7.1 21.3-14.2 42.7-21.3 64L112 160c-17.7 0-32-14.3-32-32zm28.4 288c7.1-21.3 14.2-42.7 21.3-64l316.5 0c7.1 21.3 14.2 42.7 21.3 64l-359.2 0zm42.7-128c7.1-21.3 14.2-42.7 21.3-64l231.2 0 21.3 64-273.9 0zm42.7-128c7.1-21.3 14.2-42.7 21.3-64l145.9 0c7.1 21.3 14.2 42.7 21.3 64l-188.5 0zM428.4 96L464 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-14.3 0L428.4 96zm42.7 128l32.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-11.6 0c-7.1-21.3-14.2-42.7-21.3-64zm42.7 128l30.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8.9 0c-7.1-21.3-14.2-42.7-21.3-64z" />
        <path d="M202.1 33.6c16.8 5.6 25.8 23.7 20.2 40.5l-128 384c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l128-384c5.6-16.8 23.7-25.8 40.5-20.2zm171.8 0c16.8-5.6 34.9 3.5 40.5 20.2l128 384c5.6 16.8-3.5 34.9-20.2 40.5s-34.9-3.5-40.5-20.2l-128-384c-5.6-16.8 3.5-34.9 20.2-40.5z" />
    </Icon>
);

export default TrainTrack;