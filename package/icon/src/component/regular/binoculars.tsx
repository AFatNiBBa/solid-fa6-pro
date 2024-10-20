
import { Icon } from "../../index";

/**
 * A component that renders the `binoculars` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binoculars?s=regular binoculars}
 * @preview ![binoculars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/binoculars.svg)
 */
const Binoculars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 16L96 80l0-16zM59.6 158c4.8-26.6 28-46 55.1-46l85.3 0c13.3 0 24 10.7 24 24l0 24 64 0 0-24c0-13.3 10.7-24 24-24l85.3 0c27.1 0 50.3 19.4 55.1 46l5 27.3c3.6 19.9 10.8 39 21.2 56.4l2.6 4.4c20.1 33.6 30.8 72 30.8 111.1l0 66.8c0 30.9-25.1 56-56 56l-112 0c-30.9 0-56-25.1-56-56l0-136-64 0 0 136c0 30.9-25.1 56-56 56L56 480c-30.9 0-56-25.1-56-56l0-66.8C0 318 10.6 279.6 30.8 246l2.6-4.4c10.4-17.4 17.6-36.5 21.2-56.4l5-27.3zm55.1 2c-3.9 0-7.2 2.8-7.9 6.6l-5 27.3C97.2 219.5 88 244 74.6 266.4l-2.6 4.4C56.3 296.9 48 326.7 48 357.2L48 424c0 4.4 3.6 8 8 8l112 0c4.4 0 8-3.6 8-8l0-264-61.3 0zm282.6 0L336 160l0 264c0 4.4 3.6 8 8 8l112 0c4.4 0 8-3.6 8-8l0-66.8c0-30.4-8.3-60.3-23.9-86.4l-2.6-4.4c-13.4-22.3-22.6-46.9-27.3-72.5l-5-27.3c-.7-3.8-4-6.6-7.9-6.6zM352 32l32 0c17.7 0 32 14.3 32 32l0 16-96 0 0-16c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Binoculars;