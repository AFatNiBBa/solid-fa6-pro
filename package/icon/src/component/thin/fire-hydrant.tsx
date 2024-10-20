
import { Icon } from "../../index";

/**
 * A component that renders the `fire-hydrant` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-hydrant?s=thin fire-hydrant}
 * @preview ![fire-hydrant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/fire-hydrant.svg)
 */
const FireHydrant: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0c-4.4 0-8 3.6-8 8l0 24 0 .2C122.4 36 72.5 83.5 65 144l-25 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l24 0 16 0 224 0 16 0 24 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-25 0C311.5 83.5 261.6 36 200 32.2l0-.2 0-24c0-4.4-3.6-8-8-8zm0 48c56.4 0 103.1 41.7 110.9 96L81.1 144C88.9 89.7 135.6 48 192 48zm80 272a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-80-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM40 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l32 0 240 0 32 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0 0-104 24 0c22.1 0 40-17.9 40-40l0-64c0-22.1-17.9-40-40-40l-24 0 0-56-16 0 0 64 0 128 0 112L80 496l0-112 0-128 0-64-16 0 0 56-24 0c-22.1 0-40 17.9-40 40l0 64c0 22.1 17.9 40 40 40l24 0 0 104-24 0zM64 376l-24 0c-13.3 0-24-10.7-24-24l0-64c0-13.3 10.7-24 24-24l24 0 0 112zm256 0l0-112 24 0c13.3 0 24 10.7 24 24l0 64c0 13.3-10.7 24-24 24l-24 0z" />
    </Icon>
);

export default FireHydrant;