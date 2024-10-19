
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `star-of-david` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-david?s=regular star-of-david}
 * @preview ![star-of-david](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzUuNjEgMjU2TDQ5MC43MzEgMTY2LjYyNUM1MDUuNjA1IDE0Mi4zNzUgNDg3LjEwNiAxMTIgNDU3LjYwOSAxMTJIMzQ2Ljk5M0wyODkuMTIyIDE4QzI4MS43NDggNiAyNjguODc0IDAgMjU2IDBTMjMwLjI1MiA2IDIyMi44NzggMThMMTY1LjAwNyAxMTJINTQuMzkxQzI0Ljc2OSAxMTIgNi4zOTUgMTQyLjM3NSAyMS4yNjkgMTY2LjYyNUw3Ni4zOSAyNTZMMjEuMjY5IDM0NS4zNzVDNi4zOTUgMzY5LjYyNSAyNC43NjkgNDAwIDU0LjM5MSA0MDBIMTY1LjAwN0wyMjIuODc4IDQ5NEMyMzAuMjUyIDUwNiAyNDMuMTI2IDUxMiAyNTYgNTEyUzI4MS43NDggNTA2IDI4OS4xMjIgNDk0TDM0Ni45OTMgNDAwSDQ1Ny42MDlDNDg3LjIzMSA0MDAgNTA1LjYwNSAzNjkuNjI1IDQ5MC43MzEgMzQ1LjM3NUw0MzUuNjEgMjU2Wk00MzYuOTg1IDE2MEw0MDYuNzM4IDIwOS4xMjVMMzc2LjQ5IDE2MEg0MzYuOTg1Wk0zNzcuODY1IDI1NkwzMTguNzQ1IDM1MkgxOTMuMjU1TDEzNC4xMzUgMjU2TDE5My4yNTUgMTYwSDMxOC43NDVMMzc3Ljg2NSAyNTZaTTI1NiA1OC4xMjVMMjg5LjI0NyAxMTJIMjIyLjc1M0wyNTYgNTguMTI1Wk03NS4wMTUgMTYwSDEzNS41MUwxMDUuMjYyIDIwOS4xMjVMNzUuMDE1IDE2MFpNNzUuMDE1IDM1MkwxMDUuMjYyIDMwMi44NzVMMTM1LjUxIDM1Mkg3NS4wMTVaTTI1NiA0NTMuODc1TDIyMi43NTMgNDAwSDI4OS4yNDdMMjU2IDQ1My44NzVaTTM3Ni40OSAzNTJMNDA2LjczOCAzMDIuODc1TDQzNi45ODUgMzUySDM3Ni40OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function StarOfDavid(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M435.61 256L490.731 166.625C505.605 142.375 487.106 112 457.609 112H346.993L289.122 18C281.748 6 268.874 0 256 0S230.252 6 222.878 18L165.007 112H54.391C24.769 112 6.395 142.375 21.269 166.625L76.39 256L21.269 345.375C6.395 369.625 24.769 400 54.391 400H165.007L222.878 494C230.252 506 243.126 512 256 512S281.748 506 289.122 494L346.993 400H457.609C487.231 400 505.605 369.625 490.731 345.375L435.61 256ZM436.985 160L406.738 209.125L376.49 160H436.985ZM377.865 256L318.745 352H193.255L134.135 256L193.255 160H318.745L377.865 256ZM256 58.125L289.247 112H222.753L256 58.125ZM75.015 160H135.51L105.262 209.125L75.015 160ZM75.015 352L105.262 302.875L135.51 352H75.015ZM256 453.875L222.753 400H289.247L256 453.875ZM376.49 352L406.738 302.875L436.985 352H376.49Z" />
        </Icon>
    </>
}