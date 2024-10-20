
import { Icon } from "../../index";

/**
 * A component that renders the `server` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/server?s=regular server}
 * @preview ![server](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/server.svg)
 */
const Server: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 224c-35.3 0-64-28.7-64-64L0 96zM64 336c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16L64 336zM0 352c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64zm392 32a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24-280a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM328 384a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24-280a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Server;