
import { Icon } from "../../index";

/**
 * A component that renders the `dryer` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dryer?s=regular dryer}
 * @preview ![dryer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dryer.svg)
 */
const Dryer: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c8.8 0 16 7.2 16 16l0 384c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l320 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zm64 104a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm40 256c-44.7 0-82.3-30.6-93-72l53 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-53 0c10.7-41.4 48.2-72 93-72c53 0 96 43 96 96s-43 96-96 96zm0 48a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </Icon>
);

export default Dryer;