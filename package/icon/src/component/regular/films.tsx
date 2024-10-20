
import { Icon } from "../../index";

/**
 * A component that renders the `films` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/films?s=regular films}
 * @preview ![films](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/films.svg)
 */
const Films: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 264l0-32 160 0 0 32 0 72-160 0 0-72zm0-80l0-32 0-72 160 0 0 72 0 32-160 0zM440 32l-24 0L256 32l-24 0-24 0-48 0c-35.3 0-64 28.7-64 64l0 32 0 24 0 24 0 64 0 24 0 24 0 32c0 35.3 28.7 64 64 64l48 0 24 0 24 0 160 0 24 0 24 0 48 0c35.3 0 64-28.7 64-64l0-32 0-24 0-24 0-64 0-24 0-24 0-32c0-35.3-28.7-64-64-64l-48 0-24 0zM160 80l48 0 0 48-64 0 0-32c0-8.8 7.2-16 16-16zm-16 96l64 0 0 32 0 32-64 0 0-64zm0 112l64 0 0 48-48 0c-8.8 0-16-7.2-16-16l0-32zm368 48l-48 0 0-48 64 0 0 32c0 8.8-7.2 16-16 16zm16-96l-64 0 0-32 0-32 64 0 0 64zm0-112l-64 0 0-48 48 0c8.8 0 16 7.2 16 16l0 32zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z" />
    </Icon>
);

export default Films;