
import { Icon } from "../../index";

/**
 * A component that renders the `vacuum` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum?s=thin vacuum}
 * @preview ![vacuum](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/vacuum.svg)
 */
const Vacuum: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M207 80.6C217.9 33.4 259.9 0 308.4 0L528 0c61.9 0 112 50.1 112 112c0 44.8-26.3 83.5-64.3 101.4C596.1 243.9 608 280.5 608 320l0 128c0 35.3-28.7 64-64 64l-75.3 0c5.5-4.9 10.6-10.2 15.3-16l60.1 0c26.5 0 48-21.5 48-48l0-128c0-97.2-78.8-176-176-176c-26.5 0-48 21.5-48 48l0 97c-5.4 .7-10.8 1.7-16 3l0-100c0-35.3 28.7-64 64-64c60.7 0 114.8 28.2 150 72.2c34.1-14.7 58-48.7 58-88.2c0-53-43-96-96-96L308.4 16c-41 0-76.5 28.3-85.7 68.2L190.4 224l-16.4 0L207 80.6zM166.6 256l16.4 0L146.1 416l29.9 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L21.7 512C9.7 512 0 502.3 0 490.3c0-6.7 1.6-13.4 4.6-19.4L6.5 467c15.6-31.3 47.6-51 82.5-51l40.6 0 36.9-160zM136.2 432l-.3 0L89 432c-28.9 0-55.3 16.3-68.2 42.2L18.9 478c-1.9 3.8-2.9 8-2.9 12.3c0 3.2 2.6 5.7 5.7 5.7L176 496c17.7 0 32-14.3 32-32s-14.3-32-32-32l-39.8 0zM464 416a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-176 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm96 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Vacuum;