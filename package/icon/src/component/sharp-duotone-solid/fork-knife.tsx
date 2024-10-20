
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fork-knife` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fork-knife?s=sharp-duotone-solid fork-knife}
 * @preview ![fork-knife](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fork-knife.svg)
 */
const ForkKnife: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 104c0 70.7 63.5 136.2 154.7 226.8L265.4 220.1l-50.7-50.7L192 146.7C143.1 97.8 94.2 48.9 45.3 0C45.3 0 0 40 0 104zM310.6 355.9L441.4 486.6 464 509.3 509.3 464l-22.6-22.6L355.9 310.6l-45.3 45.3z" />
        <path d="M472 8l16 16L384 128l16 16L512 48l16 16L432 176l16 16L552 88l16 16L497.5 227.4C481.7 255 452.4 272 420.7 272c-19.4 0-38.1-6.4-53.4-18L134.6 486.6 112 509.3 66.7 464l22.6-22.6L322 208.8c-11.6-15.3-18-34-18-53.4c0-31.8 17-61.1 44.6-76.8L472 8z" />
    </Icon>
);

export default ForkKnife;