
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-triangle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-triangle?s=light ruler-triangle}
 * @preview ![ruler-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ruler-triangle.svg)
 */
const RulerTriangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 45.3L32 448c0 17.7 14.3 32 32 32l402.7 0c7.3 0 13.3-5.9 13.3-13.3c0-3.5-1.4-6.9-3.9-9.4l-39.4-39.4-25.4 25.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l25.4-25.4-57.4-57.4-25.4 25.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l25.4-25.4-57.4-57.4-25.4 25.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l25.4-25.4-57.4-57.4-25.4 25.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l25.4-25.4L116.7 97.9 91.3 123.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L94.1 75.3 54.6 35.9c-2.5-2.5-5.9-3.9-9.4-3.9C37.9 32 32 37.9 32 45.3zm45.3-32L498.7 434.7c8.5 8.5 13.3 20 13.3 32c0 25-20.3 45.3-45.3 45.3L64 512c-35.3 0-64-28.7-64-64L0 45.3C0 20.3 20.3 0 45.3 0c12 0 23.5 4.8 32 13.3zm44.6 228c6-2.5 12.9-1.1 17.4 3.5l128 128c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9l-128 0c-8.8 0-16-7.2-16-16l0-128c0-6.5 3.9-12.3 9.9-14.8zM144 294.6l0 73.4 73.4 0L144 294.6z" />
    </Icon>
);

export default RulerTriangle;