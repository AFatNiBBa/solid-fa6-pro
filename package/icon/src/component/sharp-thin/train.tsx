
import { Icon } from "../../index";

/**
 * A component that renders the `train` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train?s=sharp-thin train}
 * @preview ![train](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/train.svg)
 */
const Train: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 16l0 416 416 0 0-416L16 16zM0 0L16 0 432 0l16 0 0 16 0 416 0 16-16 0-68.7 0 58.3 58.3 5.7 5.7-22.6 0-64-64-233.4 0-64 64-22.6 0 5.7-5.7L84.7 448 16 448 0 448l0-16L0 16 0 0zM224 272a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm32 48a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM368 80L80 80l0 128 288 0 0-128zM80 64l288 0 16 0 0 16 0 128 0 16-16 0L80 224l-16 0 0-16L64 80l0-16 16 0z" />
    </Icon>
);

export default Train;