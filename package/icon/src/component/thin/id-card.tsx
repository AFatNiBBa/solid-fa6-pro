
import { Icon } from "../../index";

/**
 * A component that renders the `id-card` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card?s=thin id-card}
 * @preview ![id-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/id-card.svg)
 */
const IdCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 16 544 0 0-16c0-26.5-21.5-48-48-48L64 48zM16 128l0 288c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48l0-288L16 128zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM192 288a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM152 352c-30.9 0-56 25.1-56 56c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-39.8 32.2-72 72-72l80 0c39.8 0 72 32.2 72 72c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-30.9-25.1-56-56-56l-80 0zM352 232c0-4.4 3.6-8 8-8l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-144 0c-4.4 0-8-3.6-8-8zm0 64c0-4.4 3.6-8 8-8l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-144 0c-4.4 0-8-3.6-8-8zm0 64c0-4.4 3.6-8 8-8l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-144 0c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default IdCard;