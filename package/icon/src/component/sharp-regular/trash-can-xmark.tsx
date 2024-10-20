
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-xmark?s=sharp-regular trash-can-xmark}
 * @preview ![trash-can-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/trash-can-xmark.svg)
 */
const TrashCanXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0L147.2 0 140 10.7 93.8 80 80 80 32 80 0 80l0 48 32 0 0 336 0 48 48 0 288 0 48 0 0-48 0-336 32 0 0-48-32 0-48 0-13.8 0L308 10.7 300.8 0 288 0 160 0zM296.5 80l-145 0 21.3-32 102.3 0 21.3 32zM80 464l0-336 288 0 0 336L80 464zM321.9 224L288 190.1l-17 17-47 47-47-47-17-17L126.1 224l17 17 47 47-47 47-17 17L160 385.9l17-17 47-47 47 47 17 17L321.9 352l-17-17-47-47 47-47 17-17z" />
    </Icon>
);

export default TrashCanXmark;