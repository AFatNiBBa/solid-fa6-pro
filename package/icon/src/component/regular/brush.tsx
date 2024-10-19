
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `brush` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=regular brush}
 * @preview ![brush](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMEgzMkMxNC4zNzUgMCAwIDE0LjM3NSAwIDMyVjMyMEMwIDM1NS4zNzUgMjguNjI1IDM4NCA2NCAzODRIMTI4VjQ0OEMxMjggNDgzLjM3NSAxNTYuNjI1IDUxMiAxOTIgNTEyUzI1NiA0ODMuMzc1IDI1NiA0NDhWMzg0SDMyMEMzNTUuMzc1IDM4NCAzODQgMzU1LjM3NSAzODQgMzIwVjMyQzM4NCAxNC4zNzUgMzY5LjYyNSAwIDM1MiAwWk0xOTIgNDcyQzE3OC43NSA0NzIgMTY4IDQ2MS4yNSAxNjggNDQ4UzE3OC43NSA0MjQgMTkyIDQyNFMyMTYgNDM0Ljc1IDIxNiA0NDhTMjA1LjI1IDQ3MiAxOTIgNDcyWk00OCA0OEg5NlYxNDRDOTYgMTUyLjg0NCAxMDMuMTU2IDE2MCAxMTIgMTYwUzEyOCAxNTIuODQ0IDEyOCAxNDRWNDhIMTkyVjEwNEMxOTIgMTEyLjg0NCAxOTkuMTU2IDEyMCAyMDggMTIwUzIyNCAxMTIuODQ0IDIyNCAxMDRWNDhIMzM2VjI4OEg0OFY0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Brush(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M352 0H32C14.375 0 0 14.375 0 32V320C0 355.375 28.625 384 64 384H128V448C128 483.375 156.625 512 192 512S256 483.375 256 448V384H320C355.375 384 384 355.375 384 320V32C384 14.375 369.625 0 352 0ZM192 472C178.75 472 168 461.25 168 448S178.75 424 192 424S216 434.75 216 448S205.25 472 192 472ZM48 48H96V144C96 152.844 103.156 160 112 160S128 152.844 128 144V48H192V104C192 112.844 199.156 120 208 120S224 112.844 224 104V48H336V288H48V48Z" />
        </Icon>
    </>
}