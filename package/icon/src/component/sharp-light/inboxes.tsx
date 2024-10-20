
import { Icon } from "../../index";

/**
 * A component that renders the `inboxes` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inboxes?s=sharp-light inboxes}
 * @preview ![inboxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/inboxes.svg)
 */
const Inboxes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 198.4l2.7-6.4 83.4 0 27.6 55.2 4.4 8.8 9.9 0 192 0 9.9 0 4.4-8.8L393.9 192l83.4 0 2.7 6.4 0 89.6L32 288l0-89.6zM48 160L101.3 32l309.3 0L464 160l-80 0-9.9 0-4.4 8.8L342.1 224l-172.2 0-27.6-55.2-4.4-8.8-9.9 0-80 0zM80 0L0 192l0 96 0 32 32 0 448 0 32 0 0-32 0-96L432 0 80 0zm64 352L32 352 0 352l0 32 0 96 0 32 32 0 448 0 32 0 0-32 0-96 0-32-32 0-112 0-32 64-160 0-32-64zm243.8 32l92.2 0 0 96L32 480l0-96 92.2 0 23.2 46.3 8.8 17.7 19.8 0 160 0 19.8 0 8.8-17.7L387.8 384z" />
    </Icon>
);

export default Inboxes;