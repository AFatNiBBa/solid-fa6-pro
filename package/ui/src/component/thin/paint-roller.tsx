
import { Icon } from "../../index";

/**
 * A component that renders the `paint-roller` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paint-roller?s=thin paint-roller}
 * @preview ![paint-roller](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/paint-roller.svg)
 */
const PaintRoller: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 16c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48L64 144c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48l288 0zM64 0C28.7 0 0 28.7 0 64L0 96c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-8 0-16 0-8c0-35.3-28.7-64-64-64L64 0zM240 336c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32l32 0zm-32-16c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-8 0 0-32c0-22.1 17.9-40 40-40l176 0c30.9 0 56-25.1 56-56l0-64c0-30.9-25.1-56-56-56l0 16c22.1 0 40 17.9 40 40l0 64c0 22.1-17.9 40-40 40l-176 0c-30.9 0-56 25.1-56 56l0 32-8 0z" />
    </Icon>
);

export default PaintRoller;