
import { Icon } from "../../index";

/**
 * A component that renders the `flag-swallowtail` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-swallowtail?s=regular flag-swallowtail}
 * @preview ![flag-swallowtail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/flag-swallowtail.svg)
 */
const FlagSwallowtail: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24l0 8L0 80 0 304l0 48L0 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136 376 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L352 192 443.2 70.4c3.1-4.2 4.8-9.2 4.8-14.4c0-13.3-10.7-24-24-24L48 32l0-8zm0 56l328 0-62.4 83.2c-12.8 17.1-12.8 40.5 0 57.6L376 304 48 304 48 80z" />
    </Icon>
);

export default FlagSwallowtail;