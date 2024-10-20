
import { Icon } from "../../index";

/**
 * A component that renders the `fulcrum` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fulcrum?s=brands fulcrum}
 * @preview ![fulcrum](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/fulcrum.svg)
 */
const Fulcrum: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M95.75 164.14l-35.38 43.55L25 164.14l35.38-43.55zM144.23 0l-20.54 198.18L72.72 256l51 57.82L144.23 512V300.89L103.15 256l41.08-44.89zm79.67 164.14l35.38 43.55 35.38-43.55-35.38-43.55zm-48.48 47L216.5 256l-41.08 44.89V512L196 313.82 247 256l-51-57.82L175.42 0z" />
    </Icon>
);

export default Fulcrum;