
import { Icon } from "../../index";

/**
 * A component that renders the `signature` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature?s=thin signature}
 * @preview ![signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/signature.svg)
 */
const Signature: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 120c0-39.8 32.2-72 72-72s72 32.2 72 72l0 15.9c0 26.8-2.1 53.6-6.4 80l-118 34.9c-30.6 9-51.6 37.1-51.6 69l0 107.2c0 29.2 23.7 52.9 52.9 52.9c19.6 0 37.6-10.8 46.8-28.2l27-51c21.8-41.2 37.9-85 48-130.5l4.8-21.8c1.5-6.7 2.8-13.4 4.1-20.1L454 181.6 385.2 291.8c-1.5 2.5-1.6 5.6-.2 8.1s4.1 4.1 7 4.1l176 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-161.6 0 72.3-115.8c1.8-2.8 1.6-6.4-.4-9.1s-5.4-3.8-8.6-2.8L298.6 210.9c3.6-24.8 5.4-49.9 5.4-75l0-15.9c0-48.6-39.4-88-88-88s-88 39.4-88 88l0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40zm24.1 146.1l110.3-32.6c-.8 3.8-1.6 7.7-2.4 11.5l-4.8 21.8c-9.8 44.1-25.5 86.6-46.6 126.5l-27 51c-6.4 12.1-19 19.7-32.6 19.7c-20.4 0-36.9-16.5-36.9-36.9l0-107.2c0-24.8 16.3-46.7 40.1-53.7zM8 368c-4.4 0-8 3.6-8 8s3.6 8 8 8l48 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 368zm320 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l304 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-304 0z" />
    </Icon>
);

export default Signature;