
import { Icon } from "../../index";

/**
 * A component that renders the `engine-warning` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/engine-warning?s=sharp-thin engine-warning}
 * @preview ![engine-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/engine-warning.svg)
 */
const EngineWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M408 80l8 0 0-16-8 0L304 64 200 64l-8 0 0 16 8 0 96 0 0 48-136 0-80 0-16 0 0 16 0 104-48 0 0-80 0-8L0 160l0 8L0 344l0 8 16 0 0-8 0-80 48 0 0 104 0 16 16 0 99.2 0L256 448l240 0 16 0 0-16 0-240-96-64-80 0-24 0 0-48 96 0zM80 264l0-16 0-104 80 0 144 0 32 0 75.2 0L496 200.6 496 432l-234.2 0-72.3-60.3L185 368l-5.8 0L80 368l0-104zm480-56l64 0 0 224-64 0 0-224zm-16-16l0 16 0 224 0 16 16 0 64 0 16 0 0-16 0-224 0-16-16 0-64 0-16 0zM288 336l0 16 0 16 16 0 16 0 0-16 0-16-16 0-16 0zm24-152l0-8-16 0 0 8 0 120 0 8 16 0 0-8 0-120z" />
    </Icon>
);

export default EngineWarning;