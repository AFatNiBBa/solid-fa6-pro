
import { Icon } from "../../index";

/**
 * A component that renders the `maximize` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/maximize?s=regular maximize}
 * @preview ![maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/maximize.svg)
 */
const Maximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M156.1 80L80 80l0 76.1L156.1 80zM32 192L32 64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 2.7c0 8.5-3.4 16.6-9.4 22.6L169 135l87 87 87-87L297.4 89.4c-6-6-9.4-14.1-9.4-22.6l0-2.7c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-2.7 0c-8.5 0-16.6-3.4-22.6-9.4L377 169l-87 87 87 87 45.7-45.7c6-6 14.1-9.4 22.6-9.4l2.7 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-2.7c0-8.5 3.4-16.6 9.4-22.6L343 377l-87-87-87 87 45.7 45.7c6 6 9.4 14.1 9.4 22.6l0 2.7c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l2.7 0c8.5 0 16.6 3.4 22.6 9.4L135 343l87-87-87-87L89.4 214.6c-6 6-14.1 9.4-22.6 9.4L64 224c-17.7 0-32-14.3-32-32zM355.9 432l76.1 0 0-76.1L355.9 432zM80 355.9L80 432l76.1 0L80 355.9zM355.9 80L432 156.1 432 80l-76.1 0z" />
    </Icon>
);

export default Maximize;