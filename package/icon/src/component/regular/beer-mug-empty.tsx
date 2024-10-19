
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `beer-mug-empty` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug-empty?s=regular beer-mug-empty}
 * @preview ![beer-mug-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjQgOTZIMzg0VjY0QzM4NCA0Ni4zMjcgMzY5LjY3MyAzMiAzNTIgMzJINjRDNDYuMzI3IDMyIDMyIDQ2LjMyNyAzMiA2NFY0MDBDMzIgNDQ0LjE4MyA2Ny44MTcgNDgwIDExMiA0ODBIMzA0QzM0OC4xODMgNDgwIDM4NCA0NDQuMTgzIDM4NCA0MDBWMzgzLjY5NUw0NTkuMjYgMzUwLjc3NUM0OTEuMjk4IDMzNi43NjEgNTEyIDMwNS4xMDkgNTEyIDI3MC4xNDFWMTg0QzUxMiAxMzUuMzk5IDQ3Mi42MDEgOTYgNDI0IDk2Wk0zMzYgNDAwQzMzNiA0MTcuNjczIDMyMS42NzMgNDMyIDMwNCA0MzJIMTEyQzk0LjMyNyA0MzIgODAgNDE3LjY3MyA4MCA0MDBWODBIMzM2VjQwMFpNNDY0IDI3MC4xNDFDNDY0IDI4Ni4wMzEgNDU0LjU5NCAzMDAuNDIyIDQ0MC4wMzEgMzA2Ljc5N0wzODQgMzMxLjMwN1YxNDRINDI0QzQ0Ni4wNjIgMTQ0IDQ2NCAxNjEuOTM4IDQ2NCAxODRWMjcwLjE0MVpNMTI4IDM2OFYxNDRDMTI4IDEzNS4xNTYgMTM1LjE1NiAxMjggMTQ0IDEyOFMxNjAgMTM1LjE1NiAxNjAgMTQ0VjM2OEMxNjAgMzc2Ljg0NCAxNTIuODQ0IDM4NCAxNDQgMzg0UzEyOCAzNzYuODQ0IDEyOCAzNjhaTTE5MiAzNjhWMTQ0QzE5MiAxMzUuMTU2IDE5OS4xNTYgMTI4IDIwOCAxMjhTMjI0IDEzNS4xNTYgMjI0IDE0NFYzNjhDMjI0IDM3Ni44NDQgMjE2Ljg0NCAzODQgMjA4IDM4NFMxOTIgMzc2Ljg0NCAxOTIgMzY4Wk0yNTYgMzY4VjE0NEMyNTYgMTM1LjE1NiAyNjMuMTU2IDEyOCAyNzIgMTI4UzI4OCAxMzUuMTU2IDI4OCAxNDRWMzY4QzI4OCAzNzYuODQ0IDI4MC44NDQgMzg0IDI3MiAzODRTMjU2IDM3Ni44NDQgMjU2IDM2OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BeerMugEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M424 96H384V64C384 46.327 369.673 32 352 32H64C46.327 32 32 46.327 32 64V400C32 444.183 67.817 480 112 480H304C348.183 480 384 444.183 384 400V383.695L459.26 350.775C491.298 336.761 512 305.109 512 270.141V184C512 135.399 472.601 96 424 96ZM336 400C336 417.673 321.673 432 304 432H112C94.327 432 80 417.673 80 400V80H336V400ZM464 270.141C464 286.031 454.594 300.422 440.031 306.797L384 331.307V144H424C446.062 144 464 161.938 464 184V270.141ZM128 368V144C128 135.156 135.156 128 144 128S160 135.156 160 144V368C160 376.844 152.844 384 144 384S128 376.844 128 368ZM192 368V144C192 135.156 199.156 128 208 128S224 135.156 224 144V368C224 376.844 216.844 384 208 384S192 376.844 192 368ZM256 368V144C256 135.156 263.156 128 272 128S288 135.156 288 144V368C288 376.844 280.844 384 272 384S256 376.844 256 368Z" />
        </Icon>
    </>
}