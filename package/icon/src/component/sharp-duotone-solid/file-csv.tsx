
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-csv` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-csv?s=sharp-duotone-solid file-csv}
 * @preview ![file-csv](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-csv.svg)
 */
const FileCsv: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 144-272 0 0 208L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zM200 352c-22.1 0-40 17.9-40 40l0 80c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-8 0-16-32 0 0 16 0 8c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 8 0 16 32 0 0-16 0-8c0-22.1-17.9-40-40-40l-16 0zm133.1 0c-24.9 0-45.1 20.2-45.1 45.1c0 17.8 10.5 34 26.8 41.2l37.4 16.6c4.7 2.1 7.8 6.8 7.8 12c0 7.2-5.9 13.1-13.1 13.1L304 480l-16 0 0 32 16 0 42.9 0c24.9 0 45.1-20.2 45.1-45.1c0-17.8-10.5-34-26.8-41.2l-37.4-16.6c-4.7-2.1-7.8-6.8-7.8-12c0-7.2 5.9-13.1 13.1-13.1l34.9 0 16 0 0-32-16 0-34.9 0zM448 352l-32 0 0 16 0 35c0 21.1 3.8 42 11.2 61.8L441 501.6l3.9 10.4 11.1 0 16 0 11.1 0 3.9-10.4 13.8-36.8C508.2 445 512 424.1 512 403l0-35 0-16-32 0 0 16 0 35c0 17.3-3.1 34.4-9.2 50.6L464 471.8l-6.8-18.2c-6.1-16.2-9.2-33.3-9.2-50.6l0-35 0-16z" />
    </Icon>
);

export default FileCsv;