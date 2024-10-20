
import { Icon } from "../../index";

/**
 * A component that renders the `face-viewfinder` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-viewfinder?s=regular face-viewfinder}
 * @preview ![face-viewfinder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/face-viewfinder.svg)
 */
const FaceViewfinder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 56l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80c0-4.4 3.6-8 8-8l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 0C25.1 0 0 25.1 0 56zM352 24c0 13.3 10.7 24 24 24l80 0c4.4 0 8 3.6 8 8l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80c0-30.9-25.1-56-56-56L376 0c-13.3 0-24 10.7-24 24zM24 352c-13.3 0-24 10.7-24 24l0 80c0 30.9 25.1 56 56 56l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-4.4 0-8-3.6-8-8l0-80c0-13.3-10.7-24-24-24zm464 0c-13.3 0-24 10.7-24 24l0 80c0 4.4-3.6 8-8 8l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c30.9 0 56-25.1 56-56l0-80c0-13.3-10.7-24-24-24zM240 216a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-40-96a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 272a160 160 0 1 0 0-320 160 160 0 1 0 0 320zM214.4 280c-4.4-7.6-14.2-10.3-21.9-5.8s-10.3 14.2-5.8 21.9c13.8 23.9 39.7 40 69.3 40s55.5-16.1 69.3-40c4.4-7.6 1.8-17.4-5.8-21.9s-17.4-1.8-21.9 5.8c-8.3 14.4-23.8 24-41.6 24s-33.3-9.6-41.6-24z" />
    </Icon>
);

export default FaceViewfinder;