
import { Icon } from "../../index";

/**
 * A component that renders the `indent` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/indent?s=light indent}
 * @preview ![indent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/indent.svg)
 */
const Indent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 80C7.2 80 0 72.8 0 64zM192 192c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16zm16 112l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM0 448c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 464c-8.8 0-16-7.2-16-16zM32 211.8l0 88.4L85.7 256 32 211.8zm89 31.8c7.8 6.4 7.8 18.3 0 24.7L26.2 346.4C15.7 355 0 347.6 0 334.1L0 177.9c0-13.5 15.7-20.9 26.2-12.4L121 243.6z" />
    </Icon>
);

export default Indent;