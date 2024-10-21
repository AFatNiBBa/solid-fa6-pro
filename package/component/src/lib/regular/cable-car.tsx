
import { Icon } from "../../index";

/**
 * A component that renders the `cable-car` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cable-car?s=regular cable-car}
 * @preview ![cable-car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cable-car.svg)
 */
const CableCar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-64-8a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM432 288l0 64-80 0 0-80 64 0c8.8 0 16 7.2 16 16zm0 112l0 48c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16l0-48 104 0 144 0 104 0zM80 352l0-64c0-8.8 7.2-16 16-16l64 0 0 80-80 0zm128-80l96 0 0 80-96 0 0-80zM96 224c-35.3 0-64 28.7-64 64l0 160c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-160c0-35.3-28.7-64-64-64l-136 0 0-76.5 212.9-44c13-2.7 21.3-15.4 18.6-28.4s-15.4-21.3-28.4-18.6l-232 48-232 48c-13 2.7-21.3 15.4-18.6 28.4s15.4 21.3 28.4 18.6l203.1-42 0 66.5L96 224z" />
    </Icon>
);

export default CableCar;