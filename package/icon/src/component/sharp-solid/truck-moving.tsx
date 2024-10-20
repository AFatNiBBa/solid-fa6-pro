
import { Icon } from "../../index";

/**
 * A component that renders the `truck-moving` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-moving?s=sharp-solid truck-moving}
 * @preview ![truck-moving](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/truck-moving.svg)
 */
const TruckMoving: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 32L0 32 0 304l0 80 0 16c0 44.2 35.8 80 80 80c26.2 0 49.4-12.6 64-32c14.6 19.4 37.8 32 64 32c44.2 0 80-35.8 80-80c0-5.5-.6-10.8-1.6-16L416 384l33.6 0c-1 5.2-1.6 10.5-1.6 16c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16l33.6 0 0-96 0-32 0-9.9-7-7-72-72-7-7-9.9 0-64 0 0-128zM582.1 256L480 256l0-48 54.1 0 48 48zM528 368a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM176 400a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM80 368a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default TruckMoving;