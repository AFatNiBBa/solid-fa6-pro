
import { Icon } from "../../index";

/**
 * A component that renders the `clock-desk` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-desk?s=thin clock-desk}
 * @preview ![clock-desk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clock-desk.svg)
 */
const ClockDesk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 224a208 208 0 1 1 416 0A208 208 0 1 1 16 224zm416 83.3L432 456c0 22.1-17.9 40-40 40L56 496c-22.1 0-40-17.9-40-40l0-148.7C49.1 389.8 129.7 448 224 448s174.9-58.2 208-140.7zM0 224L0 456c0 30.9 25.1 56 56 56l336 0c30.9 0 56-25.1 56-56l0-232C448 100.3 347.7 0 224 0S0 100.3 0 224zM224 96c-4.4 0-8 3.6-8 8l0 120c0 2.1 .8 4.2 2.3 5.7l56 56c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L232 220.7 232 104c0-4.4-3.6-8-8-8z" />
    </Icon>
);

export default ClockDesk;