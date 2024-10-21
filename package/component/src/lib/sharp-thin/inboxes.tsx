
import { Icon } from "../../index";

/**
 * A component that renders the `inboxes` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inboxes?s=sharp-thin inboxes}
 * @preview ![inboxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/inboxes.svg)
 */
const Inboxes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 176l123.1 0 29.8 59.6c1.4 2.7 4.1 4.4 7.2 4.4l160 0c3 0 5.8-1.7 7.2-4.4L372.9 176 496 176l0 128L16 304l0-128zm5.5-16L90.1 16l331.8 0 68.6 144L368 160c-3 0-5.8 1.7-7.2 4.4L331.1 224l-150.1 0-29.8-59.6c-1.4-2.7-4.1-4.4-7.2-4.4L21.5 160zM80 0L0 168 0 304l0 16 16 0 480 0 16 0 0-16 0-136L432 0 80 0zM184 416l-32-64L16 352 0 352l0 16L0 496l0 16 16 0 480 0 16 0 0-16 0-128 0-16-16 0-136 0-32 64-144 0zm185.9-48L496 368l0 128L16 496l0-128 126.1 0 27.6 55.2c2.7 5.4 8.3 8.8 14.3 8.8l144 0c6.1 0 11.6-3.4 14.3-8.8L369.9 368z" />
    </Icon>
);

export default Inboxes;