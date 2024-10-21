
import { Icon } from "../../index";

/**
 * A component that renders the `podium` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium?s=sharp-solid podium}
 * @preview ![podium](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/podium.svg)
 */
const Podium: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 0L192 0l0 24-24 0c-48.6 0-88 39.4-88 88l0 32-56 0L0 144l0 48 24 0 400 0 24 0 0-48-24 0-296 0 0-32c0-22.1 17.9-40 40-40l24 0 0 24 96 0c26.5 0 48-21.5 48-48s-21.5-48-48-48zM48 224L80 512l288 0 32-288L48 224z" />
    </Icon>
);

export default Podium;