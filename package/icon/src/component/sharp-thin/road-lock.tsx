
import { Icon } from "../../index";

/**
 * A component that renders the `road-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-lock?s=sharp-thin road-lock}
 * @preview ![road-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/road-lock.svg)
 */
const RoadLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M53.2 464L172.1 48 312 48l0 56 0 8 16 0 0-8 0-56 139.9 0 32.9 115.3c5.2-1.3 10.4-2.2 15.9-2.7L480 32 160 32 36.6 464 32 480l16.6 0L384 480l0-16-56 0 0-56 0-8-16 0 0 8 0 56L53.2 464zM328 200l0-8-16 0 0 8 0 112 0 8 16 0 0-8 0-112zm200 8c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-32 0-16 0 0 16 0 160 0 16 16 0 192 0 16 0 0-16 0-160 0-16-16 0-32 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-32 80l32 0 16 0 96 0 16 0 32 0 0 160-192 0 0-160z" />
    </Icon>
);

export default RoadLock;