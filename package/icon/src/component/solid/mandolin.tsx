
import { Icon } from "../../index";

/**
 * A component that renders the `mandolin` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mandolin?s=solid mandolin}
 * @preview ![mandolin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/mandolin.svg)
 */
const Mandolin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M435.3 3.6C444.8-2.3 457.1-.9 465 7l40 40c7.9 7.9 9.3 20.2 3.4 29.7l-40 64c-3.2 5.1-8.2 8.8-14 10.4L388 169.2l-65.9 65.9C323.7 322.4 311.5 512 176 512C78.8 512 0 433.2 0 336C0 200.5 189.6 188.3 276.9 189.8L342.8 124l18.1-66.3c1.6-5.8 5.3-10.8 10.4-14l64-40zM208 352a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Mandolin;