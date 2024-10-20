
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=regular hexagon}
 * @preview ![hexagon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/hexagon.svg)
 */
const Hexagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M17.1 220c-12.9 22.3-12.9 49.7 0 72l88.3 152.9c12.9 22.3 36.6 36 62.4 36l176.6 0c25.7 0 49.5-13.7 62.4-36L494.9 292c12.9-22.3 12.9-49.7 0-72L406.6 67.1c-12.9-22.3-36.6-36-62.4-36l-176.6 0c-25.7 0-49.5 13.7-62.4 36L17.1 220zm41.6 48c-4.3-7.4-4.3-16.6 0-24L146.9 91.1c4.3-7.4 12.2-12 20.8-12l176.6 0c8.6 0 16.5 4.6 20.8 12L453.4 244c4.3 7.4 4.3 16.6 0 24L365.1 420.9c-4.3 7.4-12.2 12-20.8 12l-176.6 0c-8.6 0-16.5-4.6-20.8-12L58.6 268z" />
    </Icon>
);

export default Hexagon;