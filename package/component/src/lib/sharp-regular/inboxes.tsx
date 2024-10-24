
import { Icon } from "../../index";

/**
 * A component that renders the `inboxes` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inboxes?s=sharp-regular inboxes}
 * @preview ![inboxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/inboxes.svg)
 */
const Inboxes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M62.5 96L160 96l32 64 128 0 32-64 97.5 0-40-48-307 0-40 48zM512 96l0 48 0 96 0 48-48 0L48 288 0 288l0-48 0-96L0 96 80 0 432 0l80 96zm-48 48l-82.3 0-18.7 37.5L349.7 208 320 208l-128 0-29.7 0-13.3-26.5L130.3 144 48 144l0 96 416 0 0-96zM192 384l128 0 32-64 112 0 48 0 0 48 0 96 0 48-48 0L48 512 0 512l0-48 0-96 0-48 48 0 112 0 32 64zm189.7-16l-18.7 37.5L349.7 432 320 432l-128 0-29.7 0-13.3-26.5L130.3 368 48 368l0 96 416 0 0-96-82.3 0z" />
    </Icon>
);

export default Inboxes;