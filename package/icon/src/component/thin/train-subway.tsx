
import { Icon } from "../../index";

/**
 * A component that renders the `train-subway` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-subway?s=thin train-subway}
 * @preview ![train-subway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/train-subway.svg)
 */
const TrainSubway: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 16c44.2 0 80 35.8 80 80l0 256c0 44.2-35.8 80-80 80L96 432c-44.2 0-80-35.8-80-80L16 96c0-44.2 35.8-80 80-80l256 0zM96 0C43 0 0 43 0 96L0 352c0 49.4 37.3 90.1 85.3 95.4L34.3 498.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L107.3 448l233.4 0 61.7 61.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-50.9-50.9c48-5.3 85.3-46 85.3-95.4l0-256c0-53-43-96-96-96L96 0zM216 80l0 160L96 240c-8.8 0-16-7.2-16-16L80 96c0-8.8 7.2-16 16-16l120 0zm16 0l120 0c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-120 0 0-160zM96 64C78.3 64 64 78.3 64 96l0 128c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L96 64zm0 272a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm192-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default TrainSubway;