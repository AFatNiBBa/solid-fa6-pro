
import { Icon } from "../../index";

/**
 * A component that renders the `vector-circle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-circle?s=sharp-solid vector-circle}
 * @preview ![vector-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/vector-circle.svg)
 */
const VectorCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 0L320 0l0 41.3C392.2 62.8 449.2 119.8 470.7 192l41.3 0 0 128-41.3 0C449.2 392.2 392.2 449.2 320 470.7l0 41.3-128 0 0-41.3C119.8 449.2 62.8 392.2 41.3 320L0 320 0 192l41.3 0C62.8 119.8 119.8 62.8 192 41.3L192 0zM402.7 192c-16.1-36.9-45.8-66.6-82.7-82.7l0 18.7-128 0 0-18.7c-36.9 16.1-66.6 45.8-82.7 82.7l18.7 0 0 128-18.7 0c16.1 36.9 45.8 66.6 82.7 82.7l0-18.7 128 0 0 18.7c36.9-16.1 66.6-45.8 82.7-82.7L384 320l0-128 18.7 0zM240 48l0 32 32 0 0-32-32 0zm32 384l-32 0 0 32 32 0 0-32zM432 240l0 32 32 0 0-32-32 0zM80 240l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default VectorCircle;