
import { Icon } from "../../index";

/**
 * A component that renders the `monument` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monument?s=sharp-thin monument}
 * @preview ![monument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/monument.svg)
 */
const Monument: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M74.1 400l37.1-296.6L192 22.6l80.8 80.8L309.9 400l16.1 0L288 96 203.3 11.3 192 0 180.7 11.3 96 96 58 400l16.1 0zM144 272l96 0 0 32-96 0 0-32zm0-16l-16 0 0 16 0 32 0 16 16 0 96 0 16 0 0-16 0-32 0-16-16 0-96 0zM16 496l0-48 352 0 0 48L16 496zM0 432l0 16 0 48 0 16 16 0 352 0 16 0 0-16 0-48 0-16-16 0L16 432 0 432z" />
    </Icon>
);

export default Monument;