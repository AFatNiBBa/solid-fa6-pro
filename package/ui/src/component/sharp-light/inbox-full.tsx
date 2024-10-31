
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-full` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-full?s=sharp-light inbox-full}
 * @preview ![inbox-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/inbox-full.svg)
 */
const InboxFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 323.9l1-3.9 101.1 0 27.6 55.2 4.4 8.8 9.9 0 160 0 9.9 0 4.4-8.8L377.9 320 479 320l1 3.9L480 448 32 448l0-124.1zM97 64l318 0 56 224-103 0-9.9 0-4.4 8.8L326.1 352l-140.2 0-27.6-55.2-4.4-8.8-9.9 0L41 288 97 64zM0 320L0 448l0 32 32 0 448 0 32 0 0-32 0-128L440 32 72 32 0 320zM176 144l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0zm-32 80l-16 0 0 32 16 0 224 0 16 0 0-32-16 0-224 0z" />
    </Icon>
);

export default InboxFull;