
import { Icon } from "../../index";

/**
 * A component that renders the `fork-knife` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fork-knife?s=sharp-solid fork-knife}
 * @preview ![fork-knife](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/fork-knife.svg)
 */
const ForkKnife: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M214.6 169.4L192 146.7s0 0 0 0L45.3 0S0 40 0 104c0 70.7 63.5 136.2 154.7 226.8L265.4 220.1l-50.7-50.7zM441.4 486.6L464 509.3 509.3 464l-22.6-22.6L355.9 310.6l-45.3 45.3L441.4 486.6zM488 24L472 8 348.6 78.5C321 94.3 304 123.6 304 155.3c0 19.4 6.4 38.1 18 53.4L89.4 441.4 66.7 464 112 509.3l22.6-22.6L367.2 254c15.3 11.6 34 18 53.4 18c31.8 0 61.1-17 76.8-44.6L568 104 552 88 448 192l-16-16L528 64 512 48 400 144l-16-16L488 24z" />
    </Icon>
);

export default ForkKnife;