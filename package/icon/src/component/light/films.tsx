
import { Icon } from "../../index";

/**
 * A component that renders the `films` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/films?s=light films}
 * @preview ![films](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/films.svg)
 */
const Films: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 272l0-48 224 0 0 48 0 80-224 0 0-80zm0-80l0-48 0-80 224 0 0 80 0 48-224 0zM464 32l-16 0L224 32l-16 0-16 0-32 0c-35.3 0-64 28.7-64 64l0 32 0 16 0 16 0 96 0 16 0 16 0 32c0 35.3 28.7 64 64 64l32 0 16 0 16 0 224 0 16 0 16 0 32 0c35.3 0 64-28.7 64-64l0-32 0-16 0-16 0-96 0-16 0-16 0-32c0-35.3-28.7-64-64-64l-32 0-16 0zM160 64l32 0 0 64-64 0 0-32c0-17.7 14.3-32 32-32zm-32 96l64 0 0 48 0 48-64 0 0-96zm0 160l0-32 64 0 0 64-32 0c-17.7 0-32-14.3-32-32zm384 32l-32 0 0-64 64 0 0 32c0 17.7-14.3 32-32 32zm32-96l-64 0 0-48 0-48 64 0 0 96zm0-128l-64 0 0-64 32 0c17.7 0 32 14.3 32 32l0 32zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 352c0 70.7 57.3 128 128 128l336 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-336 0c-53 0-96-43-96-96l0-240z" />
    </Icon>
);

export default Films;