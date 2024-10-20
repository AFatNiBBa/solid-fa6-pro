
import { Icon } from "../../index";

/**
 * A component that renders the `typewriter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/typewriter?s=sharp-solid typewriter}
 * @preview ![typewriter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/typewriter.svg)
 */
const Typewriter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 0L96 0 368 0l13.3 0 9.4 9.4 48 48 9.4 9.4L448 80l0 112 64 0 0 96-32 0 0 224L32 512l0-224L0 288l0-96 64 0L64 32 64 0zM384 128l-64 0 0-64L128 64l0 128 32 0 32 32 128 0 32-32 32 0 0-64zm48 192l0-32-32 0 0 32 32 0zm-96-32l0 32 32 0 0-32-32 0zm-32 0l-32 0 0 32 32 0 0-32zm-64 0l-32 0 0 32 32 0 0-32zm-64 0l-32 0 0 32 32 0 0-32zm-64 0l-32 0 0 32 32 0 0-32zm48 128l-16 0 0 32 16 0 192 0 16 0 0-32-16 0-192 0zm-16-64l-32 0 0 32 32 0 0-32zm32 32l32 0 0-32-32 0 0 32zm64-32l0 32 32 0 0-32-32 0zm64 32l32 0 0-32-32 0 0 32zm96-32l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default Typewriter;