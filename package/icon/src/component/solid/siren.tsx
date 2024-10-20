
import { Icon } from "../../index";

/**
 * A component that renders the `siren` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=solid siren}
 * @preview ![siren](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/siren.svg)
 */
const Siren: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M73 152.1L48 352l57.9 0 22.2-178c1.1-8.8 9.1-15 17.9-13.9s15 9.1 13.9 17.9L138.1 352 400 352 375 152.1C371 120 343.8 96 311.5 96l-175 0C104.2 96 77 120 73 152.1zM32 384c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L32 384z" />
    </Icon>
);

export default Siren;