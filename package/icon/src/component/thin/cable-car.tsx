
import { Icon } from "../../index";

/**
 * A component that renders the `cable-car` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cable-car?s=thin cable-car}
 * @preview ![cable-car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/cable-car.svg)
 */
const CableCar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM192 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM416 240c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48L96 496c-26.5 0-48-21.5-48-48l0-160c0-26.5 21.5-48 48-48l152 0 16 0 152 0zm0-16l-152 0 0-97.6L505.8 71.8c4.3-1 7-5.3 6-9.6s-5.3-7-9.6-6l-248 56-248 56c-4.3 1-7 5.3-6 9.6s5.3 7 9.6 6L248 130l0 94L96 224c-35.3 0-64 28.7-64 64l0 160c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-160c0-35.3-28.7-64-64-64zM96 304c0-8.8 7.2-16 16-16l80 0 0 96-80 0c-8.8 0-16-7.2-16-16l0-64zm112 80l0-96 96 0 0 96-96 0zm112 0l0-96 80 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-80 0zM80 304l0 64c0 17.7 14.3 32 32 32l288 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-288 0c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default CableCar;