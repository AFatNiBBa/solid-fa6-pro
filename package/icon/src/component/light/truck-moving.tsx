
import { Icon } from "../../index";

/**
 * A component that renders the `truck-moving` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-moving?s=light truck-moving}
 * @preview ![truck-moving](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/truck-moving.svg)
 */
const TruckMoving: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M72 64c-22.1 0-40 17.9-40 40l0 200 0 32c13.4-10 30-16 48-16c26.2 0 49.4 12.6 64 32c14.6-19.4 37.8-32 64-32c32.8 0 61 19.7 73.3 48L448 368l0-112 0-32 0-120c0-22.1-17.9-40-40-40L72 64zM480 336c13.4-10 30-16 48-16c32.8 0 60.9 19.7 73.3 47.9c3.8-.6 6.7-3.9 6.7-7.9l0-56 0-48-128 0 0 80zm0-176l0 64 112 0-43.2-57.6c-3-4-7.8-6.4-12.8-6.4l-56 0zm160 90.7l0 5.3 0 48 0 56c0 19.4-13.7 35.5-32 39.2l0 .8c0 44.2-35.8 80-80 80s-80-35.8-80-80l-160 0c0 44.2-35.8 80-80 80c-26.2 0-49.4-12.6-64-32c-14.6 19.4-37.8 32-64 32c-44.2 0-80-35.8-80-80l0-32 0-64L0 104C0 64.2 32.2 32 72 32l336 0c39.8 0 72 32.2 72 72l0 24 56 0c15.1 0 29.3 7.1 38.4 19.2l56 74.7c6.2 8.3 9.6 18.4 9.6 28.8zM528 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM256 400a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM80 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default TruckMoving;