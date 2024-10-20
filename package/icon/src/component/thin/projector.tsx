
import { Icon } from "../../index";

/**
 * A component that renders the `projector` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/projector?s=thin projector}
 * @preview ![projector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/projector.svg)
 */
const Projector: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M424 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 112c0 4.4 3.6 8 8 8s8-3.6 8-8L424 8zM261.7 42.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l80 80c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-80-80zm320 11.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-80 80c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l80-80zM272 320a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm304 0c0-43.6-17.4-83.1-45.7-112l45.7 0c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-8 0-37.7 0c28.3-28.9 45.7-68.4 45.7-112zM560 448l0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-64 0c-26.7-20.1-60-32-96-32s-69.3 11.9-96 32L64 192c-35.3 0-64 28.7-64 64L0 384c0 35.3 28.7 64 64 64l0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 240 0c26.7 20.1 60 32 96 32s69.3-11.9 96-32c0 0 0 0 0 0l48 0zM72 432l-8 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l237.7 0C273.4 236.9 256 276.4 256 320s17.4 83.1 45.7 112L72 432zm40-112a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM96 288a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm96 48a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm-32-16a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default Projector;