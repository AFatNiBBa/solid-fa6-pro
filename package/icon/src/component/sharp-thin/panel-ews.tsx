
import { Icon } from "../../index";

/**
 * A component that renders the `panel-ews` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/panel-ews?s=sharp-thin panel-ews}
 * @preview ![panel-ews](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/panel-ews.svg)
 */
const PanelEws: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 16l480 0 0 480L16 496l0-192c30.9 0 56 25.1 56 56l0 32c0 30.9 25.1 56 56 56s56-25.1 56-56l0-40 40 0 16 0 0-16 0-96 0-16-16 0-96 0-16 0 0 16 0 96 0 16 16 0 40 0 0 40c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-32c0-39.8-32.2-72-72-72L16 16zM0 296L0 496l0 16 16 0 480 0 16 0 0-16 0-480 0-16L496 0 16 0 0 0 0 16 0 296zM96 80l-8 0 0 16 8 0 128 0 8 0 0-16-8 0L96 80zm192 0l-8 0 0 16 8 0 128 0 8 0 0-16-8 0L288 80zM96 144l-8 0 0 16 8 0 128 0 8 0 0-16-8 0L96 144zm192 0l-8 0 0 16 8 0 128 0 8 0 0-16-8 0-128 0zM224 336l-48 0-48 0 0-96 96 0 0 96zm80-96l96 0 0 192-96 0 0-192zm-16-16l0 16 0 192 0 16 16 0 96 0 16 0 0-16 0-192 0-16-16 0-96 0-16 0z" />
    </Icon>
);

export default PanelEws;