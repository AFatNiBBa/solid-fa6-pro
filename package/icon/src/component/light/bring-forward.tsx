
import { Icon } from "../../index";

/**
 * A component that renders the `bring-forward` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-forward?s=light bring-forward}
 * @preview ![bring-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bring-forward.svg)
 */
const BringForward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 480l224 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0 0-32 64 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64l0-64 32 0 0 64c0 17.7 14.3 32 32 32zM64 320l224 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64l0 224c0 17.7 14.3 32 32 32zm224 32L64 352c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L288 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64zm-32-96l0-160L96 96l0 160 160 0zm32 0c0 17.7-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32L64 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160z" />
    </Icon>
);

export default BringForward;