
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-minimize` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-minimize?s=sharp-regular arrows-minimize}
 * @preview ![arrows-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrows-minimize.svg)
 */
const ArrowsMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 14.1L65 31l111 111L176 56l0-24 48 0 0 24 0 144 0 24-24 0L56 224l-24 0 0-48 24 0 86.1 0L31 65l-17-17L48 14.1zM497.9 48L481 65l-111 111 86.1 0 24 0 0 48-24 0-144 0-24 0 0-24 0-144 0-24 48 0 0 24 0 86.1L447 31l17-17L497.9 48zM32 288l24 0 144 0 24 0 0 24 0 144 0 24-48 0 0-24 0-86.1L65 481l-17 17L14.1 464l17-17 111-111L56 336l-24 0 0-48zm256 0l24 0 144 0 24 0 0 48-24 0-86.1 0L481 447l17 17L464 497.9l-17-17-111-111 0 86.1 0 24-48 0 0-24 0-144 0-24z" />
    </Icon>
);

export default ArrowsMinimize;