
import { Icon } from "../../index";

/**
 * A component that renders the `monument` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monument?s=sharp-regular monument}
 * @preview ![monument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/monument.svg)
 */
const Monument: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M141.2 118.7L95.5 432 47 432 96 96l62.1-62.1L192 0l33.9 33.9L288 96l49 336-48.5 0L242.8 118.7 192 67.9l-50.8 50.8zM344 512l-48 0L88 512l-48 0-16 0L0 512l0-48 24 0 18.3 0 48.5 0 202.3 0 48.5 0 18.3 0 24 0 0 48-24 0-16 0zM144 336l0-48 96 0 0 48-96 0z" />
    </Icon>
);

export default Monument;