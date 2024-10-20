
import { Icon } from "../../index";

/**
 * A component that renders the `train-subway` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-subway?s=light train-subway}
 * @preview ![train-subway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/train-subway.svg)
 */
const TrainSubway: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 32l0 192L32 224 32 96c0-35.3 28.7-64 64-64l112 0zm32 0l112 0c35.3 0 64 28.7 64 64l0 128-176 0 0-192zM32 352l0-96 384 0 0 96c0 35.3-28.7 64-64 64L96 416c-35.3 0-64-28.7-64-64zM96 0C43 0 0 43 0 96L0 352c0 46 32.4 84.4 75.6 93.8L36.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L118.6 448l210.7 0 59.3 59.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-38.9-38.9C415.6 436.4 448 398 448 352l0-256c0-53-43-96-96-96L96 0zm24 352a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm232-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default TrainSubway;