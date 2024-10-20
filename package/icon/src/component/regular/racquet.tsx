
import { Icon } from "../../index";

/**
 * A component that renders the `racquet` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/racquet?s=regular racquet}
 * @preview ![racquet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/racquet.svg)
 */
const Racquet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M349 48c31.9 0 61.1 10.9 82.6 32.4S464 131.2 464 163c0 40.6-17.7 84.9-52.9 120.1c-64 64-154.5 68.7-202.7 20.5C186.9 282.1 176 252.8 176 221c0-40.6 17.7-84.9 52.9-120.1S308.4 48 349 48zm0-48c-54.2 0-110.5 23.4-154 66.9s-67 99.8-66.9 154c0 17.2 2.4 34.3 7.3 50.6c8.2 27.4 7.6 58.9-9.9 80.6c-12.6-11.3-31.9-10.9-44 1.2l-72 72c-12.5 12.5-12.5 32.8 0 45.3l32 32c12.5 12.5 32.8 12.5 45.3 0l72-72c12.1-12.1 12.5-31.4 1.2-44c21.7-17.5 53.2-18 80.5-9.7c67.7 20.4 148.5-3.6 204.8-59.8c43.6-43.6 67-99.8 66.9-154c0-42.8-14.8-84.9-46.5-116.6S391.8 0 349 0zM54.6 448L104 398.6l9.4 9.4L64 457.4 54.6 448z" />
    </Icon>
);

export default Racquet;