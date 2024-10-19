
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `command` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/command?s=solid command}
 * @preview ![command](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMjg4SDMyMFYyMjRIMzUyQzQwNC45MzggMjI0IDQ0OCAxODAuOTM4IDQ0OCAxMjhTNDA0LjkzOCAzMiAzNTIgMzJTMjU2IDc1LjA2MiAyNTYgMTI4VjE2MEgxOTJWMTI4QzE5MiA3NS4wNjIgMTQ4LjkzOCAzMiA5NiAzMlMwIDc1LjA2MiAwIDEyOFM0My4wNjIgMjI0IDk2IDIyNEgxMjhWMjg4SDk2QzQzLjA2MiAyODggMCAzMzEuMDYyIDAgMzg0UzQzLjA2MiA0ODAgOTYgNDgwUzE5MiA0MzYuOTM4IDE5MiAzODRWMzUySDI1NlYzODRDMjU2IDQzNi45MzggMjk5LjA2MiA0ODAgMzUyIDQ4MFM0NDggNDM2LjkzOCA0NDggMzg0UzQwNC45MzggMjg4IDM1MiAyODhaTTMyMCAxMjhDMzIwIDExMC4zNDQgMzM0LjM0NCA5NiAzNTIgOTZTMzg0IDExMC4zNDQgMzg0IDEyOFMzNjkuNjU2IDE2MCAzNTIgMTYwSDMyMFYxMjhaTTEyOCAzODRDMTI4IDQwMS42NTYgMTEzLjY1NiA0MTYgOTYgNDE2UzY0IDQwMS42NTYgNjQgMzg0Uzc4LjM0NCAzNTIgOTYgMzUySDEyOFYzODRaTTEyOCAxNjBIOTZDNzguMzQ0IDE2MCA2NCAxNDUuNjU2IDY0IDEyOFM3OC4zNDQgOTYgOTYgOTZTMTI4IDExMC4zNDQgMTI4IDEyOFYxNjBaTTI1NiAyODhIMTkyVjIyNEgyNTZWMjg4Wk0zNTIgNDE2QzMzNC4zNDQgNDE2IDMyMCA0MDEuNjU2IDMyMCAzODRWMzUySDM1MkMzNjkuNjU2IDM1MiAzODQgMzY2LjM0NCAzODQgMzg0UzM2OS42NTYgNDE2IDM1MiA0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Command(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M352 288H320V224H352C404.938 224 448 180.938 448 128S404.938 32 352 32S256 75.062 256 128V160H192V128C192 75.062 148.938 32 96 32S0 75.062 0 128S43.062 224 96 224H128V288H96C43.062 288 0 331.062 0 384S43.062 480 96 480S192 436.938 192 384V352H256V384C256 436.938 299.062 480 352 480S448 436.938 448 384S404.938 288 352 288ZM320 128C320 110.344 334.344 96 352 96S384 110.344 384 128S369.656 160 352 160H320V128ZM128 384C128 401.656 113.656 416 96 416S64 401.656 64 384S78.344 352 96 352H128V384ZM128 160H96C78.344 160 64 145.656 64 128S78.344 96 96 96S128 110.344 128 128V160ZM256 288H192V224H256V288ZM352 416C334.344 416 320 401.656 320 384V352H352C369.656 352 384 366.344 384 384S369.656 416 352 416Z" />
        </Icon>
    </>
}