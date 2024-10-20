
import { Icon } from "../../index";

/**
 * A component that renders the `face-viewfinder` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-viewfinder?s=sharp-thin face-viewfinder}
 * @preview ![face-viewfinder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-viewfinder.svg)
 */
const FaceViewfinder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8-.2L-.2-.2-.2 8l0 144 0 8.2 16.3 0 0-8.2 0-135.8 135.8 0 8.2 0 0-16.3L152-.2 8-.2zm496 0L360-.2l-8.2 0 0 16.3 8.2 0 135.8 0 0 135.8 0 8.2 16.3 0 0-8.2 0-144 0-8.2L504-.2zM-.2 512.2l8.2 0 144 0 8.2 0 0-16.3-8.2 0-135.8 0 0-135.8 0-8.2-16.3 0 0 8.2 0 144 0 8.2zM504 512l8 0 0-8 0-144 0-8-16 0 0 8 0 136-136 0-8 0 0 16 8 0 144 0zM224 224a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm80 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM256 112a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 304a160 160 0 1 0 0-320 160 160 0 1 0 0 320zm0-96c-20.7 0-38.8-11.2-48.5-28l-13.8 8c12.4 21.5 35.7 36 62.4 36s49.9-14.5 62.4-36l-13.8-8c-9.7 16.8-27.8 28-48.5 28z" />
    </Icon>
);

export default FaceViewfinder;