
import { Icon } from "../../index";

/**
 * A component that renders the `grill` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grill?s=sharp-regular grill}
 * @preview ![grill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/grill.svg)
 */
const Grill: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 16c0 97.2-78.8 176-176 176S48 193.2 48 96l0-16 352 0zM48 32L0 32 0 80 0 96c0 89.8 52.9 167.3 129.2 203l-23.1 53.8c-3.3-.5-6.7-.8-10.1-.8c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64l156.7 0 13.2 30.8 4 9.3 9.5 22.1 44.1-18.9-9.5-22.1-4-9.3L318.8 299C395.1 263.3 448 185.8 448 96l0-16 0-48-48 0L48 32zM296.2 368l-144.3 0 22.9-53.4c15.9 3.6 32.3 5.4 49.3 5.4s33.4-1.9 49.3-5.4L296.2 368zM96 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Grill;