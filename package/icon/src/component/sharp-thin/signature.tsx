
import { Icon } from "../../index";

/**
 * A component that renders the `signature` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature?s=sharp-thin signature}
 * @preview ![signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/signature.svg)
 */
const Signature: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 120c0-39.8 32.2-72 72-72s72 32.2 72 72l0 15.9c0 26.8-2.1 53.6-6.4 80L117.7 264.3 112 266l0 6 0 200 0 8 8 0 72 0 4.8 0 2.3-4.3 39.7-74.9c21.8-41.2 37.9-85 48-130.5l4.8-21.8c1.5-6.7 2.8-13.4 4.1-20.1L454 181.6 385.2 291.8 377.6 304l14.4 0 176 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-161.6 0 72.3-115.8L490 154.4l-20.2 6L298.6 210.9c3.6-24.8 5.4-49.9 5.4-75l0-15.9c0-48.6-39.4-88-88-88s-88 39.4-88 88l0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40zM128 278l150.4-44.4c-.8 3.8-1.6 7.7-2.4 11.5l-4.8 21.8c-9.8 44.1-25.5 86.6-46.6 126.5L187.2 464 128 464l0-186zM8 368l-8 0 0 16 8 0 48 0 8 0 0-16-8 0L8 368zm320 0l-8 0 0 16 8 0 304 0 8 0 0-16-8 0-304 0z" />
    </Icon>
);

export default Signature;