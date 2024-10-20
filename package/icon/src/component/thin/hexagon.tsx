
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=thin hexagon}
 * @preview ![hexagon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/hexagon.svg)
 */
const Hexagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M30.9 228c-10 17.3-10 38.7 0 56l88.3 152.9c10 17.3 28.5 28 48.5 28l176.6 0c20 0 38.5-10.7 48.5-28L481.1 284c10-17.3 10-38.7 0-56L392.8 75.1c-10-17.3-28.5-28-48.5-28l-176.6 0c-20 0-38.5 10.7-48.5 28L30.9 228zM17.1 292c-12.9-22.3-12.9-49.7 0-72L105.4 67.1c12.9-22.3 36.6-36 62.4-36l176.6 0c25.7 0 49.5 13.7 62.4 36L494.9 220c12.9 22.3 12.9 49.7 0 72L406.6 444.9c-12.9 22.3-36.6 36-62.4 36l-176.6 0c-25.7 0-49.5-13.7-62.4-36L17.1 292z" />
    </Icon>
);

export default Hexagon;