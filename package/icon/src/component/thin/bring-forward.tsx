
import { Icon } from "../../index";

/**
 * A component that renders the `bring-forward` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-forward?s=thin bring-forward}
 * @preview ![bring-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bring-forward.svg)
 */
const BringForward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 496l224 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-64 0 0-16 64 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64l0-64 16 0 0 64c0 26.5 21.5 48 48 48zm64-160c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L64 16C37.5 16 16 37.5 16 64l0 224c0 26.5 21.5 48 48 48l224 0zm0 16L64 352c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L288 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64zm-16-96l0-160c0-8.8-7.2-16-16-16L96 80c-8.8 0-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16zm16 0c0 17.7-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32L64 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160z" />
    </Icon>
);

export default BringForward;