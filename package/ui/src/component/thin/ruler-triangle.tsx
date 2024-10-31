
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-triangle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-triangle?s=thin ruler-triangle}
 * @preview ![ruler-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ruler-triangle.svg)
 */
const RulerTriangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 45.3L16 448c0 26.5 21.5 48 48 48l402.7 0c16.2 0 29.3-13.1 29.3-29.3c0-7.8-3.1-15.2-8.6-20.7L442.3 401l-28.7 28.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L431 389.7 362.3 321l-28.7 28.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L351 309.7 282.3 241l-28.7 28.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L271 229.7 202.3 161l-28.7 28.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L191 149.7 122.3 81 93.7 109.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L111 69.7 65.9 24.6C60.5 19.1 53 16 45.3 16C29.1 16 16 29.1 16 45.3zM0 448L0 45.3C0 20.3 20.3 0 45.3 0c12 0 23.5 4.8 32 13.3L498.7 434.7c8.5 8.5 13.3 20 13.3 32c0 25-20.3 45.3-45.3 45.3L64 512c-35.3 0-64-28.7-64-64zM124.9 248.6c3-1.2 6.4-.6 8.7 1.7l128 128c2.3 2.3 3 5.7 1.7 8.7s-4.2 4.9-7.4 4.9l-128 0c-4.4 0-8-3.6-8-8l0-128c0-3.2 1.9-6.2 4.9-7.4zM136 275.3L136 376l100.7 0L136 275.3z" />
    </Icon>
);

export default RulerTriangle;