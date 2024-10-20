
import { Icon } from "../../index";

/**
 * A component that renders the `flute` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flute?s=regular flute}
 * @preview ![flute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/flute.svg)
 */
const Flute: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 304l432 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-432 0 0 96zm-48 0l0-96-32 0c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l32 0zM64 160l32 0 24 0 24 0 432 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-432 0-24 0-24 0-32 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64zm256 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Flute;