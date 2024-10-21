
import { Icon } from "../../index";

/**
 * A component that renders the `road-bridge` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-bridge?s=regular road-bridge}
 * @preview ![road-bridge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/road-bridge.svg)
 */
const RoadBridge: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 48c8.8 0 16 7.2 16 16l0 384c0 8.8-7.2 16-16 16l-72 0 0-56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 56-72 0c-8.8 0-16-7.2-16-16l0-384c0-8.8 7.2-16 16-16l72 0 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-56 72 0zm0-48L384 0c-35.3 0-64 28.7-64 64l0 384c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64zM480 192c-13.3 0-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80c0-13.3-10.7-24-24-24zM24 96C10.7 96 0 106.7 0 120s10.7 24 24 24l48 0 0 64-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 128 0 64 0 0-48-40 0 0-64 40 0 0-48L24 96zM272 304c-57.4 0-104 46.6-104 104l0 56-48 0 0-64c0-53-43-96-96-96c-13.3 0-24 10.7-24 24s10.7 24 24 24c26.5 0 48 21.5 48 48l0 72c0 22.1 17.9 40 40 40l64 0c22.1 0 40-17.9 40-40l0-64c0-30.9 25.1-56 56-56l16 0 0-48-16 0zM200 144l0 64-80 0 0-64 80 0z" />
    </Icon>
);

export default RoadBridge;