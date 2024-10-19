
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bread-slice` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice?s=regular bread-slice}
 * @preview ![bread-slice](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzJDMTMyLjM2OSAzMiAwIDk2LjI5MSAwIDE5MkMwIDIyNy4yODkgMjYuOTE2IDI1NiA2MCAyNTZINjRWNDMyQzY0IDQ1OC41MSA4NS40OSA0ODAgMTEyIDQ4MEg0MDBDNDI2LjUxIDQ4MCA0NDggNDU4LjUxIDQ0OCA0MzJWMjU2SDQ1MkM0ODUuMDg0IDI1NiA1MTIgMjI3LjI4OSA1MTIgMTkyQzUxMiA5Ni4yOTEgMzc5LjYzMSAzMiAyNTYgMzJaTTQ1MiAyMDhINDAwVjQzMkgxMTJWMjA4SDYwQzU0LjI1IDIwOCA0OCAyMDEuNjI1IDQ4IDE5MkM0OCAxMzIuMzc1IDE1My43NSA4MCAyNTYgODBTNDY0IDEzMi4zNzUgNDY0IDE5MkM0NjQgMjAxLjYyNSA0NTcuNzUgMjA4IDQ1MiAyMDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BreadSlice(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 32C132.369 32 0 96.291 0 192C0 227.289 26.916 256 60 256H64V432C64 458.51 85.49 480 112 480H400C426.51 480 448 458.51 448 432V256H452C485.084 256 512 227.289 512 192C512 96.291 379.631 32 256 32ZM452 208H400V432H112V208H60C54.25 208 48 201.625 48 192C48 132.375 153.75 80 256 80S464 132.375 464 192C464 201.625 457.75 208 452 208Z" />
        </Icon>
    </>
}