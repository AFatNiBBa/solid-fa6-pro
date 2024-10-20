
import { Icon } from "../../index";

/**
 * A component that renders the `truck-moving` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-moving?s=thin truck-moving}
 * @preview ![truck-moving](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/truck-moving.svg)
 */
const TruckMoving: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M72 48c-30.9 0-56 25.1-56 56l0 200 0 48c14.6-19.4 37.8-32 64-32c31.7 0 59 18.4 72 45.1c13-26.7 40.3-45.1 72-45.1c38.7 0 71 27.5 78.4 64L448 384l0-280c0-30.9-25.1-56-56-56L72 48zM224 480c-31.7 0-59-18.4-72-45.1C139 461.6 111.7 480 80 480c-44.2 0-80-35.8-80-80l0-16 0-80L0 104C0 64.2 32.2 32 72 32l320 0c39.8 0 72 32.2 72 72l0 32 80 0c12.6 0 24.4 5.9 32 16l56 74.7c5.2 6.9 8 15.3 8 24l0 53.3 0 72c0 17.7-14.3 32-32 32l-.4 0c-4 40.4-38.1 72-79.6 72s-75.6-31.6-79.6-72l-.4 0 0-8-144 0c0 44.2-35.8 80-80 80zm383.6-88l.4 0c8.8 0 16-7.2 16-16l0-72 0-48-160 0 0 96c14.6-19.4 37.8-32 64-32c41.5 0 75.6 31.6 79.6 72zm11.6-155.7l-56-74.7c-4.5-6-11.6-9.6-19.2-9.6l-80 0 0 88 157.5 0c-.6-1.3-1.4-2.6-2.3-3.7zM528 464a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM288 400a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM80 464a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default TruckMoving;