
import { Icon } from "../../index";

/**
 * A component that renders the `walker` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/walker?s=thin walker}
 * @preview ![walker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/walker.svg)
 */
const Walker: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M185.6 16L328 16c30.9 0 56 25.1 56 56l0 120L96.8 192 131.4 58c6.4-24.7 28.7-42 54.2-42zM384 208l0 210.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48l0-344c0-39.8-32.2-72-72-72L185.6 0c-32.8 0-61.5 22.2-69.7 54L.3 502c-1.1 4.3 1.5 8.6 5.7 9.7s8.6-1.5 9.7-5.7L92.7 208 384 208zm16 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Walker;