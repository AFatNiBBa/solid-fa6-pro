
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lira-sign` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lira-sign?s=light lira-sign}
 * @preview ![lira-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDY0QzMyMCA0NzIuODQ0IDMxMi44NDQgNDgwIDMwNCA0ODBIMTZDMTAuNDY5IDQ4MCA1LjMxMiA0NzcuMTI1IDIuMzc1IDQ3Mi40MDZDLTAuNTMxIDQ2Ny42ODggLTAuNzgxIDQ2MS44MTIgMS42ODggNDU2Ljg0NEMxOC4yNzEgNDIzLjY5MSAzMC4xMzMgMzg4LjI4OSAzNy44NzMgMzUySDE2QzcuMTU2IDM1MiAwIDM0NC44NDQgMCAzMzZTNy4xNTYgMzIwIDE2IDMyMEg0My41MDhDNDYuMjE1IDMwMC4zMTIgNDggMjgwLjUxNCA0OCAyNjAuNjU2VjI1NkgxNkM3LjE1NiAyNTYgMCAyNDguODQ0IDAgMjQwUzcuMTU2IDIyNCAxNiAyMjRINDhWMTYwLjI4MUM0OCA4OS41NjIgMTA1LjU2MiAzMiAxNzYuMjgxIDMyQzE5OS45NjkgMzIgMjIzLjE4OCAzOC40MzggMjQzLjQzOCA1MC41OTRMMjk2LjIxOSA4Mi4yODFDMzAzLjgxMyA4Ni44MTMgMzA2LjI4MSA5Ni42NTYgMzAxLjcxOSAxMDQuMjE5QzI5Ny4xODggMTExLjgxMyAyODcuMjgxIDExNC4zNDQgMjc5Ljc4MSAxMDkuNzE5TDIyNi45NjkgNzguMDMxQzIxMS42ODggNjguODQ0IDE5NC4xNTYgNjQgMTc2LjI4MSA2NEMxMjMuMTg4IDY0IDgwIDEwNy4xODggODAgMTYwLjI4MVYyMjRIMjQwQzI0OC44NDQgMjI0IDI1NiAyMzEuMTU2IDI1NiAyNDBTMjQ4Ljg0NCAyNTYgMjQwIDI1Nkg4MFYyNjAuNjU2QzgwIDI4MC41MDYgNzguMjc5IDMwMC4yOTkgNzUuNzU0IDMyMEgyNDBDMjQ4Ljg0NCAzMjAgMjU2IDMyNy4xNTYgMjU2IDMzNlMyNDguODQ0IDM1MiAyNDAgMzUySDcwLjc3OUM2NC4yNDYgMzg0LjkzNCA1NC40MjIgNDE3LjIxMyA0MS4wOTQgNDQ4SDMwNEMzMTIuODQ0IDQ0OCAzMjAgNDU1LjE1NiAzMjAgNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LiraSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 464C320 472.844 312.844 480 304 480H16C10.469 480 5.312 477.125 2.375 472.406C-0.531 467.688 -0.781 461.812 1.688 456.844C18.271 423.691 30.133 388.289 37.873 352H16C7.156 352 0 344.844 0 336S7.156 320 16 320H43.508C46.215 300.312 48 280.514 48 260.656V256H16C7.156 256 0 248.844 0 240S7.156 224 16 224H48V160.281C48 89.562 105.562 32 176.281 32C199.969 32 223.188 38.438 243.438 50.594L296.219 82.281C303.813 86.813 306.281 96.656 301.719 104.219C297.188 111.813 287.281 114.344 279.781 109.719L226.969 78.031C211.688 68.844 194.156 64 176.281 64C123.188 64 80 107.188 80 160.281V224H240C248.844 224 256 231.156 256 240S248.844 256 240 256H80V260.656C80 280.506 78.279 300.299 75.754 320H240C248.844 320 256 327.156 256 336S248.844 352 240 352H70.779C64.246 384.934 54.422 417.213 41.094 448H304C312.844 448 320 455.156 320 464Z" />
        </Icon>
    </>
}