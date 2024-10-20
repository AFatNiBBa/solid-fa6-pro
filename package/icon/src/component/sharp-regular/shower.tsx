
import { Icon } from "../../index";

/**
 * A component that renders the `shower` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shower?s=sharp-regular shower}
 * @preview ![shower](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shower.svg)
 */
const Shower: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 32L0 32 0 56 0 456l0 24 48 0 0-24L48 80l62.1 0 19.6 19.6c-27.8 43.4-22.8 101.7 15.1 139.6l7 7-.8 .8-17 17L168 297.9l17-17L345 121l17-17L328 70.1 311 87l-.8 .8L303.4 81l-.2-.2c-37.9-37.9-96.2-43-139.6-15.1L137 39l-7-7L120 32 24 32zm245.5 83l6.8 6.8-90.5 90.5-7-7c-25-25-25-65.5 0-90.5s65.5-25 90.5 0l.2 .2c0 0 0 0 0 0zM416 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Shower;