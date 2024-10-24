
import { Icon } from "../../index";

/**
 * A component that renders the `flag-swallowtail` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-swallowtail?s=sharp-regular flag-swallowtail}
 * @preview ![flag-swallowtail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/flag-swallowtail.svg)
 */
const FlagSwallowtail: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 24L48 0 0 0 0 24l0 8L0 80 0 304l0 48L0 488l0 24 48 0 0-24 0-136 344 0 56 0-28.8-48L352 192 419.2 80 448 32l-56 0L48 32l0-8zm0 56l315.2 0-52.4 87.3L296 192l14.8 24.7L363.2 304 48 304 48 80z" />
    </Icon>
);

export default FlagSwallowtail;